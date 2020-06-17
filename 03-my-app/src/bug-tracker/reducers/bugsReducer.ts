import Action from '../models/Action';
import Bug from '../models/Bug';

function bugsReducer(currentState : Bug[] = [], action : Action) {
    if (action.type === 'ADD_NEW_BUG') {
        const newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'REMOVE_BUG') {
        const newState = currentState.filter(bug => bug.id !== action.payload.id);
        return newState;
    }
    if (action.type === 'UPDATE_BUG') {
        const newState = currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
        return newState;
    }
    if (action.type === 'REMOVE_BUGS') {
        const bugsToRemove = action.payload;
        const newState = currentState.filter(bug => !bugsToRemove.find( (b : Bug) => b.id === bug.id));
        return newState;
    }
    if (action.type === 'LOAD_BUGS') {
        return action.payload;
    }
    return currentState;
}

export default bugsReducer;