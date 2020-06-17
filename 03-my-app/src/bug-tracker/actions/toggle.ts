import Bug from '../models/Bug';
import Action from '../models/Action';

const toggle = (bug : Bug) : Action => {
    const toggledBug : Bug = { ...bug, isClosed: !bug.isClosed };
    const action : Action = { type: 'UPDATE_BUG', payload: toggledBug };
    return action;
}

export default toggle;