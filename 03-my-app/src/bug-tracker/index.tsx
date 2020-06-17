import React, { Component } from 'react';
import BugStats from './views/BugStats';
import BugList from './views/BugList';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';

class BugTracker extends Component <any> {
    render = () => {
        const { bugs, remove, toggle, removeClosed, addNew } = this.props;
        return (
            <React.Fragment>
                <h1>Bug Tracker</h1>
                <hr />
                <BugStats bugs={bugs} />
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{ bugs, toggle, remove, removeClosed }} />
            </React.Fragment>
        )
    }
}

export default BugTracker;