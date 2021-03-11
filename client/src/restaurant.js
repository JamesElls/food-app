const Restaurant = (props) => {
	const {name, review, rating, id, foodID} = props
  return(
    <div>
      <h1>Restaurant Page</h1>
			<p>{name}:{id}</p>
			<p>{review}</p>
			<p>{rating}</p>
			<div>
			<button>Delete</button>
			<button>Update</button>
			</div>
    </div>
  )
}




export default Restaurant;