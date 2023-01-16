import { createContext, useReducer } from 'react'

export const MedicamentsContext = createContext()

export const medicamentsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_MEDOCS':
			return {
				workouts:action.payload
			}
		case 'CREATE_MEDOCS':
			return {
				workouts: [action.payload, ...state.workouts]
			}
		case 'DELETE_MEDOCS':
			return {
				workouts: state.workouts.filter((w) => w._id !== action.payload._id)
			}
		default: 
			return state
	}
}

export const MedicamentsContextProvider = ({children}) => {

	const [state, dispatch] = useReducer(medicamentsReducer, {
		workouts: null
	})


	return (
		<MedicamentsContext.Provider value={{...state, dispatch}}>
			{ children }
		</MedicamentsContext.Provider>

	)
}