import axios from 'axios';

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

function load(){
    return function(dispatch : any){
        const p = getRemoteData();
        p.then(bugs => {
            const action = { type: 'LOAD_BUGS', payload: bugs };
            dispatch(action);
        });
    }
    
}

export default load;