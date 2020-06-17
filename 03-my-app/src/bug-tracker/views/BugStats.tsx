import React from 'react';
import Bug from '../models/Bug';

const BugStats = (props : any) => {
    const { bugs } = props;
    const closedCount = bugs.reduce((result : number , bug : Bug) => bug.isClosed ? ++result : result, 0);
    return (
        <section className="stats">
            <span className="closed">{closedCount}</span>
            <span> / </span>
            <span>{bugs.length}</span>
        </section>
    )
};

export default BugStats;