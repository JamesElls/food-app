import {useState, useEffect} from 'react'
import axios from 'axios'
import food from './food'

const Foods = () => {

    const [foods, setFoods] =useState([])

    useEffect(() => {
        getFoods()
    },[])

    const getFoods = async () => {
        try {
            let res = await axios.get('/api/foods')
            setFoods(res.data)
        } catch (err) {
            alert('error occurred getting foods, need to debug')
        }
    }

    const renderFoods = () => {
        if (foods.length === 0){
            return <h3>No Foods</h3>
        }
        return foods.map( food =>{
            return(
             <h3>check back soon for this feature</h3>
            )
        })
    }

    console.log(foods)

    return (
        <div>
            {renderFoods()}
        </div>
    )
    
}


export default Foods
