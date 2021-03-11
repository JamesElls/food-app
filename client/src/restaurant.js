import {Link} from 'react-router-dom'

const Restaurant = (props) => {
	const {name, review, rating, id, foodId} = props
  return(
    <div>
      <h1>Restaurant Page</h1>
			<p>{name}:{id}</p>
			<p>{review}</p>
			<p>{rating}</p>
			<div>
			<button>Delete</button>
			<Link to={`/api/foods/${foodId}/restaurants/${id}`}>
			<button>Update</button>
			</Link>
			</div>
    </div>
  )
}




export default Restaurant;