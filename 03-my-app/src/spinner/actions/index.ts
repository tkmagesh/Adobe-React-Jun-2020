const spinnerActionCreators = {
    doubleDecrement() {
        const action = { type: 'DOUBLE_DECREMENT' };
        return action;
    },
    decrement(delta : number) {
        const action = { type: 'DECREMENT', payload: delta };
        return action;
    },
    increment(delta : number) {
        const action = { type: 'INCREMENT', payload: delta };
        return action;
    },
    doubleIncrement() {
        const action = { type: 'DOUBLE_INCREMENT' };
        return action;
    }
}

export default spinnerActionCreators;