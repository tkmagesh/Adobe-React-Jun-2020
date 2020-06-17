import Bug from '../models/Bug';
import Action from '../models/Action';

let currentBugId = 0;
const addNew = (bugName : string) : Action => {
    const newBug : Bug = {
        id: ++currentBugId,
        name: bugName,
        isClosed: false,
        createdAt: new Date()
    };
    const action : Action = { type: 'ADD_NEW_BUG', payload: newBug };
    return action;
}

export default addNew;