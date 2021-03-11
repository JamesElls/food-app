import {useState,useParams} from 'react'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'


const FoodForm = () => {

    const {id} = useParams()

    const [food, setFood] =useState([])

    useEffect(() => {
        getFood()
    },[])

    const getFood = async () => {
        try {
            let res = await axios.get(`/api/foods/${id}`)
            setFood(res.data)
        } catch (err) {
            alert('error occurred getting foods, need to debug')
        }
    }

    const handleSubmit = async (e) => {
       e.preventDefault()
       let food = food
       if(id){
       console.log(food)
       
       let res = await axios.put(`/api/foods/${id}`, food)
       console.log(res)
       } else {
        let res = await axios.post('/api/foods', food)
        console.log(res)
       }
    }

    return (

        <div className='food-form'>
            <h5>{id ? 'Edit': 'Create'}</h5>
            <Form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} />

                <Button type={'submit'}>{id ? 'Update': 'Add'}</Button>
            </Form>
        </div>
    )
}

export default FoodForm


FoodForm.defaultProps = {
    name: "",
}


