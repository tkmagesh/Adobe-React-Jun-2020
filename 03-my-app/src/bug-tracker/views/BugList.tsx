import React, { Component } from 'react';
import Bug from '../models/Bug';
import BugItem from './BugItem';

interface PropType { 
    bugs : Bug[], 
    toggle : (bug : Bug) => void,
    remove : (bug : Bug) => void,
    removeClosed : (bugs : Bug[]) => void
}

class BugList extends Component<PropType> {
    render = () => {
        const { bugs, toggle, remove, removeClosed } = this.props;
        return (
            <section className="list">
                <ol>
                    {bugs.map(bug => (<BugItem key={bug.id} {...{ bug, toggle, remove }} />))}
                </ol>
                <input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)} />
            </section>
        )
    }
}

export default BugList;