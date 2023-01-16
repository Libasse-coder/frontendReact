import { MedicamentsContext } from '../context/MedicamentContext'
import { useContext } from 'react'

export const useMedicamentsContext = () => {
	const context = useContext(MedicamentsContext)

	if (!context) {
		throw Error('useMedicamentsContext must be used inside an MedicamentsContextProvider')
	}

	return context
}