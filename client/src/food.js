import {useState, useEffect} from 'react'
import axios from 'axios'
import { Card , Button, CardHeader} from "semantic-ui-react"
import { useParams, useHistory, Link } from 'react-router-dom'
import Restaurant from './restaurant'
import newCookForm from './newCookForm'
const Food = () => {
    const { id } = useParams()
    let history = useHistory();

    const [food, setFood]=useState({})
    const [showNewForm, setShowNewForm] = useState(false)
    const [restaurant, setRestaurant] = useState([])


    const getFood = async () => {
      try {
        let res = await axios.get(`/api/foods/${id}`)
        setFood(res.data.food)
        setRestaurant(res.data.restaurant)
  
      } catch (err) {
        alert('error check console')
      }
    }

    const deleteFood= async()=> {
let res= await axios.get(`/api/foods/${id}`)
history.push('/')
    }
    
  return(
    <>
    <Card fluid color='purple'>
    <Card.Content>
       <Card.Header style={{display:'flex', justifyContent:'space-between'}}>
          
         <div >
           <Button color='orange' onClick={deleteFood}>Delete</Button>
           <Link to={`/foods/${id}/edit`}>
              <Button>Update</Button>
           </Link>
         </div>
       </Card.Header>
       </Card.Content>
      </Card>
      
      </>
  )
}

export default Food;
