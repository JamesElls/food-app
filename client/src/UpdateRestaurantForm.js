import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'




const UpdateRestaurantForm = () => {
	const {food_id, id} = useParams()
	const history = useHistory()

	const [food, setFood] = useState(null)
	const [name, setName] = useState('')
	const [address, setAddress] = useState('')


	useEffect(()=>{
		getRestaurant()
	},[])


	const getRestaurant = async() => {
		try {
			let res = await axios.get(`/api/foods/${food_id}/restaurants/${id}`)
			console.log(res.data)
			setName(res.data.name)
			setAddress(res.data.address)
		} catch (err) {
			console.log(err)
		}
	}


	const handleSubmit = async() => {
		try {
			let res = await axios.put(`/api/foods/${food_id}/restaurants/${id}`, {name, address})
			history.push(`/foods/${food_id}`)
		} catch (err) {
			console.log(err)
		}
	}
	


	return (
		<Form onSubmit ={handleSubmit}>
			<h1>Update Restaurant~ {name}</h1>
			<Form.Field>
			<label>Name</label>
			<input
			  value={name}
				onChange={(e)=> setName(e.target.value)}
			 	defaultValue={name} 
				placeholder='Input New Restaurant Name Here' />
			</Form.Field>
			<Form.Field>
			<label>Address</label>
			<input
				value={address}
				onChange={(e)=> setAddress(e.target.value)}
				defaultValue={address} 
				placeholder='Input New Restaurant Review Here' />
			</Form.Field>
			<Button type='submit'>Add Restaurant</Button>
			<Button onClick={()=>history.push(`/foods/${food_id}`)}>Cancel</Button>
		</Form>
		)
}




export default UpdateRestaurantForm;