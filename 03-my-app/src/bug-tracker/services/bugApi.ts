import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/bugs';

function getAll(){
    return axios
        .get(serviceEndPoint)
        .then(response => response.data);
}

function getById(id : any) {
    return axios
        .get(`${serviceEndPoint}/${id}`)
        .then(response => response.data);
}

function save(bugData : any){
    if (bugData.id === 0){  
        axios
            .post(serviceEndPoint, bugData)
            .then(response => response.data);
    } else {
        axios
            .put(`${serviceEndPoint}/${bugData.id}`, bugData)
            .then(response => response.data);
    }
}

function remove(bugData : any){
    axios
        .delete(`${serviceEndPoint}/${bugData.id}`)
        .then(response => response.data);
}

export default { getAll, save, remove, getById }