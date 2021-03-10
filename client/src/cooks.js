import axios from 'axios';
import { useState, useEffect } from 'react';
import Cook from './cook';
import { Link } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';

const Cooks = () => {
  const [cooks, setCooks] = useState([])

  const getCooks = async () => {
    try {
      let res = await axios.get("/api/cooks")
      setCooks(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=> {
    getCooks()
  }, [])


  const renderCooks = () => {
    return cooks.map( cook => {
      return(
        <Card>
          <Card.Content style={{background: 'whitesmoke', display: 'flex', justifyContent: 'space-between'}}>
            <Card.Content>
              <Card.Header>{cook.name}</Card.Header>
              <Card.Meta>specialty ~ {cook.specialty}</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Link to={`/cooks/${cook.id}`}>
                <Button>View</Button>
              </Link>
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Link>
                <Button basic color='green'>
                  Update
                </Button>
              </Link>
              <Button basic color='red'>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      )
    })
  }

  return(
    <Card.Group>
      <Card fluid color='blue'>
        <Card.Content style={{display: 'flex', justifyContent: 'space-between'}}>
          <Card.Header>Cooks Page</Card.Header>
          <Link>
            <Button>New Cook</Button>
          </Link>
        </Card.Content>
      </Card>
      {renderCooks()}
    </Card.Group>
  
  )
}


export default Cooks;