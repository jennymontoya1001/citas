import {createStore,combineReducers} from 'redux';
import {citasReducer} from '../reducers/citasReducer';


const reducers = combineReducers({

    cita: citasReducer
    
})

export const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

