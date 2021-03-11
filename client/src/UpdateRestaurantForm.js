import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'




const UpdateRestaurantForm = () => {
	const {food_id, id} = useParams()
	const history = useHistory()

	const [food, setFood] = useState(null)
	const [name, setName] = useState('')
	const [review, setReview] = useState('')


	useEffect(()=>{
		getRestaurant()
	},[])


	const getRestaurant = async() => {
		try {
			let res = await axios.get(`/api/foods/${food_id}/restaurants/${id}`)
			setName(res.data.name)
			setReview(res.data.review)
		} catch (err) {
			console.log(err)
		}
	}


	const handleSubmit = async() => {
		try {
			let res = await axios.put(`/api/foods/${food_id}/restaurants`, {name, review})
			history.push(`/foods/${food_id}`)
		} catch (err) {
			console.log(err)
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
			<Button type='submit'>Add Restaurant</Button>
			<Button onClick={()=>history.push(`/foods/${food_id}`)}>Cancel</Button>
		</Form>
		)
}




export default UpdateRestaurantForm;