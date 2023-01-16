import { useEffect } from 'react'
import { useMedicamentsContext } from "../hooks/useMedicamentsContext"

//components
import MedicamentDetails from '../components/MedicamentDetails'
import MedicamentForm from '../components/MedicamentForm'

const Home = () => {
	const {workouts, dispatch} = useMedicamentsContext()

	useEffect(() => {

		const fetchWorkouts = async () => {
			const response = await fetch('https://apinodemongo.onrender.com/api/medicaments')
			const json = await response.json()

			if (response.ok) {
				dispatch({type: 'SET_MEDOCS', payload: json})
			}
		}

		fetchWorkouts()

	}, [])

	return (
		<div>

			<MedicamentForm />
			
			<div className="workouts">

				{workouts && workouts.map((workout) => (
					<MedicamentDetails key={workout._id} workout={workout} />
				))}

			</div>
			
		</div>
		)
}

export default Home