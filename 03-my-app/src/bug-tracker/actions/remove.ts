import Bug from '../models/Bug';
import Action from '../models/Action';

const remove = (bug : Bug) : Action => {
    const action : Action = { type: 'REMOVE_BUG', payload: bug };
    return action;
}

export default remove;