var StateManager = (function(){
    var _currentState = undefined,
        _listeners = [],
        _reducer = undefined

    function getState(){
        return currentState;
    }

    function subscribe(listener){
        _listeners.push(listener);
    }

    function triggerChange(){
        _listeners.forEach(listener => listener());
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        triggerChange();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('reducer function is mandatory')
        _reducer = reducer;
        var store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})();