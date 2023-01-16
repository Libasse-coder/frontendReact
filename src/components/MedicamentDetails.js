import { useMedicamentsContext } from '../hooks/useMedicamentsContext'


const MedicamentDetails = ({workout}) => {

	const { dispatch } = useMedicamentsContext()
	
	const handleClick = async () => {
		const response = await fetch('/api/medicaments/' + workout._id, {
			method: 'DELETE'
		})
		const json = await response.json()

		if (response.ok) {
			dispatch({type: 'DELETE_MEDOCS', payload: json})
		}
	}

	return (
		<div className="workout-details">
			<h4>{workout.drug_name}</h4>
			<p><strong>medical_condition :</strong>{workout.medical_condition}</p>
			<p><strong>side_effects :</strong>{workout.side_effects}</p>
			<p><strong>generic_name :</strong>{workout.generic_name}</p>
			<p><strong>drug_classes :</strong>{workout.drug_classes}</p>
			<p><strong>brand_names :</strong>{workout.brand_names}</p>
			<p><strong>medical_condition_description :</strong>{workout.medical_condition_description}</p>
			<p><strong>rating :</strong>{workout.rating}</p>
			<span onClick={handleClick}>delete</span>
		</div>
		)
}

export default MedicamentDetails
