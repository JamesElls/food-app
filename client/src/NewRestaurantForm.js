import axios from 'axios'
import {useState} from 'react'
import history from 'react-router-dom'


const newRestaurantForm = () => {
	const [name, setName] = useState ('')
	const [review, setReview] = useState ('')

	const handleSubmit = async () => {
		try {
			axios.post(`/api/foods/:food_id/restaurants`,{name, review})
			history.goBack()
		}catch(error){
			alert('not correctly functioning may need history hook')
		}
	}

	return (
			
		<Form onSubmit ={handleSubmit}>
			<Form.Field>
			<h1>Add A New Restaurant!</h1>
			<input
			  value={name}
				onChange={(e)=> setName(e.target.value)}
			 	defaultValue={name} 
				placeholder='Input New Restaurant Name Here' />
			</Form.Field>
			<Form.Field>
			<input
				value={review}
				onChange={(e)=> setReview(e.target.value)}
				defaultValue={review} 
				placeholder='Input New Restaurant Review Here' />
			</Form.Field>
			<button type='submit'>Add Restaurant</button>
		</Form>

	)
}

end

export default newRestaurantForm