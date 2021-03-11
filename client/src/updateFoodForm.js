import { useParams, useLocation, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'

const UpdateFormFood = () => {
    const history = useHistory()
    // getting food data via react router
    let { food, x } = useLocation(); 
    const { id } = useParams()
    const [name, setName] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.put(`/api/foods/${id}`, { name: name })
            history.goBack()
        } catch (error) {
            alert('err')
        }
        console.log({ name: name })
    }
    
    return (
        <div>
            <h1>UpdateFormFood {x}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
    
}

export default UpdateFormFood