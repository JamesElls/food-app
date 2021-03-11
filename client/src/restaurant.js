import {Link} from 'react-router-dom'

const Restaurant = (props) => {
	const {name, address, id, foodId} = props
  return(
    <div style={{border: '1px solid purple', padding: '15px', margin: '10px', display:'flex', justifyContent:'center', alignItems:'center'}}>
			<h1>{name}</h1>
			<p>{address}</p>
			<div>
			<button>Delete</button>
			<Link to={`/foods/${foodId}/restaurants/${id}/update`}>
			<button>Update</button>
			</Link>
			</div>
    </div>
  )
}




export default Restaurant;