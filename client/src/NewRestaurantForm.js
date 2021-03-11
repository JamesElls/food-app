import axios from 'axios'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'


const newRestaurantForm = () => {
	const [name, setName] = useState ('')
	const [address, setAddress] = useState ('')
	const history = useHistory()

	const handleSubmit = async () => {
		e.preventDefault()
		try {
			axios.post(`/api/foods/:food_id/restaurants`,{name, address})
			history.push(`/food/:id`)
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

end

export default newRestaurantForm