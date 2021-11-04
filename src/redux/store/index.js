import { createStore } from 'redux';

function reducers(){
    return {};
}

export default () => {
    return{
        ...createStore(reducers) // primer parametro reducers, segundo 
    };
}