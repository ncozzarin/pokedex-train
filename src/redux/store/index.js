import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function reducers(){
    return {
        testing: "2"
    };
}

export default () => {
    return{
        ...createStore(reducers, applyMiddleware(thunk)) // primer parametro reducers, segundo el middleware con lo que aplico middleware al store de redux
    };
};