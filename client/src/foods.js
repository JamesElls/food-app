import {useState, useEffect} from 'react'
import axios from 'axios'
import { Card , Button, CardHeader} from "semantic-ui-react"
import { Link, useHistory } from 'react-router-dom'


const Foods = () => {

    const [foods, setFoods] =useState([])
    const history = useHistory()

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

    const deleteFood = async (id) => {
        try {
          let res = await axios.delete(`/api/foods/${id}`)
          window.location.reload()
        } catch (err) {
          console.log(err)
        }
      } 

    const renderFoods = () => {
        if (foods.length === 0){
            return <h3>No Foods</h3>
        }
        return foods.map( food =>{
            return(
                <Card>
                    <Card.Content style={{background: 'whitesmoke', display: 'flex', justifyContent: 'space-between'}}>
                        <Card.Content>
                        <Card.Header>{food.name}</Card.Header>
                        </Card.Content>
                        <Card.Content>
                        <Link to={`/foods/${food.id}`}>
                            <Button>View</Button>
                        </Link>
                        </Card.Content>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Link to={`/foods/${food.id}/update`}>
                            <Button basic color='green'>
                            Update
                            </Button>
                        </Link>
                        <Button basic color='red' onClick={() => deleteFood(food.id)}>
                            Delete
                        </Button>
                        </div>
                    </Card.Content>
            </Card>
            )
        })
    }


    return (
        <Card.Group>
        <Card fluid color='blue'>
          <Card.Content style={{display: 'flex', justifyContent: 'space-between'}}>
            <Card.Header>Foods Page</Card.Header>
            <Link to={`/foods/new`}>
              <Button>New Food</Button>
            </Link>
          </Card.Content>
        </Card>
        {renderFoods()}
      </Card.Group>
    )
    
}


export default Foods
