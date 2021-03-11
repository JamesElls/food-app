import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'




const updateRestaurant = () => {

	let response = axios.get(`/api/foods/${food_id}/restaurants/${id}`)

	const {foodID, id} = useParams()
	const {food, setFood} = useState(null)
	const {name, setName} = useState('')
	const {review, setReview} = useState('')
	


	return (
		<h1>Update This Restaurant</h1>
		)
}