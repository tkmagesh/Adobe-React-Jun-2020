import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './views/BugStats';
import BugList from './views/BugList';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import bugActionCreators from './actions';

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

function mapStateToProps(storeState : any){
    const spinnerValue = storeState.spinnerData;
    const bugs = storeState.bugsData.filter((bug : any) => bug.id % 2 === spinnerValue % 2);
    return { bugs : bugs };
}

function mapDispatchToProps(dispatch : any){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker)