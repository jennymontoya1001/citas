import {types} from '../types/types';

const initialState = {
     citas: [],
}
export const citasReducer = (state = initialState, action) => {
     switch (action.type) {
         case types.agregar:
             return {
               ...state,citas:[...state.citas,action.payLoad]
             }
        case types.borrar:
             return {
                 ...state
             }

             default:
             return state;
     }
} 