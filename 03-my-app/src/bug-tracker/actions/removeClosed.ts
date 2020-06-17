import Bug from '../models/Bug';
import Action from '../models/Action';

const removeClosed = (bugs : Bug[]) : Action => {
    const closedBugs : Bug[] = bugs.filter(bug => bug.isClosed);
    const action : Action = { type: 'REMOVE_BUGS', payload: closedBugs };
    return action;
}
export default removeClosed;