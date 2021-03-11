import axios from 'axios'
import {useState} from 'react'
import { Card , Button, CardHeader, Form} from "semantic-ui-react"


const FoodForm = () => {
	const [name, setName] = useState ('')

	const handleSubmit = async () => {
		try {
			axios.post(`/api/foods/:food_id`,{name})
		
		}catch(error){
			alert('not correctly functioning may need history hook')
		}
	}

	return (
			
		<Form onSubmit ={handleSubmit}>
			<Form.Field>
                <h1>Add A New Food!</h1>
                <input
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    defaultValue={name} 
                    placeholder='Input New Food Name Here' />
			</Form.Field>

			<Button type='submit'>Add Food</Button>
		</Form>

	)
}

end

export default FoodForm