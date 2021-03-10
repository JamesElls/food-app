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
    return cooks.map( cook => <Cook key={cook.id} {...cook}/>
    // {
      // return(
      //   <Link to={`cooks/${cook.id}/${cook.name}/${cook.specialty}`}>
      //     <div>
      //       {cook.name}
      //     </div>
      //   </Link>

      // )
    // }
    )
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