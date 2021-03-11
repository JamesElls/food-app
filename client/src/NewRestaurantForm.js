import axios from 'axios'
import {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'


const NewRestaurantForm = () => {
	const [name, setName] = useState ('')
	const [address, setAddress] = useState ('')
	const history = useHistory()
	const {food_id} = useParams()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try { console.log(food_id)
			let res = await axios.post(`/api/foods/${food_id}/restaurants`,{name, address})
			history.push(`/foods/${food_id}`)
		}catch(error){
			alert('not correctly functioning')
		}
	}

	return (
			
		<div>
			<Form onSubmit ={handleSubmit}>
				<Form.Field>
				<h1>Add A New Restaurant!</h1>
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
					placeholder='Input New Restaurant Address Here' />
				</Form.Field>
				<Button type='submit'>Add Restaurant</Button>
				<Button onClick={()=>history.push(`/food/:id`)}>Cancel</Button>
			</Form>
		</div>
	)
}


export default NewRestaurantForm