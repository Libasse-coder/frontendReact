import { useState } from "react"
import { useMedicamentsContext } from "../hooks/useMedicamentsContext"

const MedicamentForm = () => {
	const { dispatch } = useMedicamentsContext()

	const [drug_name, setDrug_name] = useState('')
	const [medical_condition, setMedical_condition] = useState('')
	const [side_effects, setSide_effects] = useState('')
	const [generic_name, setGeneric_name] = useState('')
	const [drug_classes, setDrug_classes] = useState('')
	const [brand_names, setBrand_names] = useState('')
	const [medical_condition_description, setMedical_condition_description] = useState('')
	const [rating, setRating] = useState('')
	const [error, setError] = useState(null)
	const [emptyFields, setEmptyFields] = useState([])


	const handleSubmit = async (e) => {
		e.preventDefault()

		const workout = {drug_name, medical_condition, side_effects, generic_name, drug_classes, brand_names, medical_condition_description, rating}

		const response = await fetch('/api/medicaments', {
			method: 'POST',
			body: JSON.stringify(workout),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const json = await response.json()

		if (!response.ok) {
			setError(json.error)
			setEmptyFields(json.emptyFields)
		}
		if (response.ok) {
			setDrug_name('')
			setMedical_condition('')
			setSide_effects('')
			setGeneric_name('')
			setDrug_classes('')
			setBrand_names('')
			setMedical_condition_description('')
			setRating('')
			setError(null)
			setEmptyFields([])
			console.log('Nouveau medicament ajouté', json)
			dispatch({type: 'CREATE_MEDOCS', payload: json})
		}
	}

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Ajouter un nouveau médicament</h3>

			<label>Nom médicament:</label>
			<input type="text" onChange={(e) => setDrug_name(e.target.value)} value={drug_name} className={emptyFields.includes('drug_name') ? 'error' : ''} />

			<label>Condition médical:</label>
			<input type="text" onChange={(e) => setMedical_condition(e.target.value)} value={medical_condition} className={emptyFields.includes('medical_condition') ? 'error' : ''} />

			<label>Effet secondaire:</label>
			<input type="text" onChange={(e) => setSide_effects(e.target.value)} value={side_effects} className={emptyFields.includes('side_effects') ? 'error' : ''} />

			<label>Nom générique médicament:</label>
			<input type="text" onChange={(e) => setGeneric_name(e.target.value)} value={generic_name} className={emptyFields.includes('generic_name') ? 'error' : ''} />

			<label>Classe médicament:</label>
			<input type="text" onChange={(e) => setDrug_classes(e.target.value)} value={drug_classes} className={emptyFields.includes('drug_classes') ? 'error' : ''} />

			<label>Brand Names:</label>
			<input type="text" onChange={(e) => setBrand_names(e.target.value)} value={brand_names} className={emptyFields.includes('brand_names') ? 'error' : ''} />

			<label>Description Condition medical:</label>
			<input type="text" onChange={(e) => setMedical_condition_description(e.target.value)} value={medical_condition_description} className={emptyFields.includes('medical_condition_description') ? 'error' : ''} />

			<label>Note:</label>
			<input type="number" onChange={(e) => setRating(e.target.value)} value={rating} className={emptyFields.includes('rating') ? 'error' : ''} />

			<button>Ajout Médicament</button>
			{error && <div className="error">{error}</div>}
		</form>
		)

}


export default MedicamentForm