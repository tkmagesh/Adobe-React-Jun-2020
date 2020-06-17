import React, { Component } from 'react';

class BugItem extends Component <any> {
    render = () => {
        const { bug, toggle, remove } = this.props;
        return (
            <li>
                <span
                    className={'bugname ' + (bug.isClosed ? 'closed' : '')}
                    onClick={() => toggle(bug)}
                >
                    {bug.name}
                </span>
                <div>{bug.isClosed ? 'closed' : 'open'}</div>
                <div className="datetime">{bug.createdAt.toString()}</div>
                <input type="button" value="Delete" onClick={() => remove(bug)} />
            </li>
        )
    }
}

export default BugItem;