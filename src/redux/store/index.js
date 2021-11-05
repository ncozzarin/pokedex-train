import { createStore } from 'redux';

function reducers(){
    return {
        testing: "2"
    };
}

export default () => {
    return{
        ...createStore(reducers) // primer parametro reducers, segundo 
    };
};