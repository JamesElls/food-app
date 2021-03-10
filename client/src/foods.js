import {useState, useEffect} from 'react'
import axios from 'axios'
import { Card , Button, CardHeader} from "semantic-ui-react"
import { Link } from 'react-router-dom'


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
                <Card>
                    <Card.Header style={{display:'flex', justifyContent:'center', backgroundColor:'lightGrey'}}>
                        {food.name}
                    </Card.Header>

                    <button>   

                    <Link to={`/food/${food.id}`}>
                        <div>
                            view
                        </div>
                    </Link>

                    </button>
              </Card>
            )
        })
    }

    console.log(foods)

    return (
        <div className='food-homepage'>
            {renderFoods()}
        </div>
    )
    
}


export default Foods
