import axios from 'axios';
import bugApi from '../services/bugApi';

function getlocalData(){
    return [
        {
            "id": 1,
            "name": "Bug - 1",
            "isClosed": false,
            "createdAt": "2020-06-17T11:36:45.521Z"
        },
        {
            "id": 2,
            "name": "Bug - 2",
            "isClosed": false,
            "createdAt": "2020-06-17T11:36:54.589Z"
        },
        {
            "id": 3,
            "name": "Bug - 3",
            "isClosed": false,
            "createdAt": "2020-06-17T11:37:03.961Z"
        }
    ]
}

function getRemoteData(){
    return axios
        .get('http://localhost:3030/bugs')
        .then(response => response.data)
        
}

/* 
in a sync action - action creator returns an action object

in an async action - action creator returns a function which it expects to be invoked with reference to dispatch allowing the action creator to dispatch the action by itself when the data becomes available in future

this is enabled by the redux-thunk middleware

*/
/* function load(){
    return function(dispatch : any){
        const p = getRemoteData();
        p.then(bugs => {
            const action = { type: 'LOAD_BUGS', payload: bugs };
            dispatch(action);
        });
    }
    
} */



function load(){
    return function(dispatch:any){
        bugApi
            .getAll()
            .then(bugs => {
                const action = { type: 'LOAD_BUGS', payload: bugs };
                dispatch(action);
            })
    }
}

export default load;