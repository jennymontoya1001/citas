
import {types} from '../types/types'

export  const actionCita = (cita) => {
    return {
        type: types.agregar,
        payload: cita
    }
}

export  const BorrarActionCita = (id) => {
    return {
        type: types.borrar,
        payload: id
    }
}