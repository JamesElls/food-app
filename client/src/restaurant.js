import axios from 'axios'
import {Link} from 'react-router-dom'



const Restaurant = (props) => {
	const {name, address, id, foodId} = props
	
	
	const deleteRestaurant = async (foodId, id) => {
    let res = await axios.delete(`/api/foods/${foodId}/restaurants/${id}`)
		window.location.reload()
		console.log (foodId)
  }
	
	return(
		<div style={{border: '1px solid purple', padding: '15px', margin: '10px', display:'flex', justifyContent:'center', alignItems:'center'}}>
			<h1>{name}</h1>
			<p>{address}</p>
    {/* <div>
      <h1>Restaurant Page</h1>
			<p>{name}:{id}</p>
			<p>{review}</p>
			<p>{rating}</p> */}
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