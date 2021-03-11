import axios from 'axios'
import {Link} from 'react-router-dom'



const Restaurant = (props) => {
	const {name, review, rating, id, foodId} = props
	
	const deleteRestaurant = async (foodId, id) => {
    let res = await axios.delete(`/api/foods/${foodId}/restaurants/${id}`)
		window.location.reload()
		console.log (foodId)
  }
	
	return(
    <div>
      <h1>Restaurant Page</h1>
			<p>{name}:{id}</p>
			<p>{review}</p>
			<p>{rating}</p>
			<div>
			<button color='red' onClick={() => deleteRestaurant(foodId, id)}>Delete</button>
			<Link to={`/foods/${foodId}/restaurants/${id}/update`}>
			<button>Update</button>
			</Link>
			</div>
    </div>
  )
}




export default Restaurant;