import {useState, useEffect} from 'react'
import axios from 'axios'
import { Card , Button, CardHeader} from "semantic-ui-react"
import { useParams, useHistory, Link } from 'react-router-dom'
import Restaurant from './restaurant'
import newCookForm from './newCookForm'
import NewRestaurantForm from './NewRestaurantForm'
const Food = () => {
    const { id } = useParams()
    let history = useHistory();

    const [food, setFood]=useState({})
    const [showNewForm, setShowNewForm] = useState(false)
    const [restaurants, setRestaurants] = useState([])


    const getFood = async () => {
      try {
        let res = await axios.get(`/api/foods/${id}`)
        setFood(res.data.food)
        setRestaurants(res.data.restaurants)
  
      } catch (err) {
        alert('error check console')
      }
    }

  useEffect (()=>{
    getFood()
  
  }, [])

    const deleteFood= async()=> {
let res= await axios.get(`/api/foods/${id}`)
history.push('/')
    }
    const renderRestaurants = ()=>{
      return restaurants.map(restaurant => <Restaurant key={restaurant.id} foodId={id} {...restaurant}/>)
    }
    
  return(
    <>
    <Card fluid color='purple'>
    <Card.Content>
       <Card.Header style={{display:'flex', justifyContent:'space-between'}}>
			 <Link to= {`/foods/${id}/restaurants`}>	 
			 <Button color='orange'>Add New Restaurant</Button>
			 </Link>
         <div >
					 <h1>{food.name}</h1>
         </div>
       </Card.Header>
       </Card.Content>
      </Card>
      <Card.Group>
        {renderRestaurants()}
      </Card.Group>
      </>
  )
}

export default Food;
