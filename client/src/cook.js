
import { Link } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';

const Cook = (props) => {
  const {id, name, specialty} = props


  return(
    <Card>
      <Card.Content style={{background: 'whitesmoke'}}>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>specialty ~ {specialty}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to={`/cooks/${id}`}>
            <Button basic color='green'>
              View/Update
            </Button>
          </Link>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}



export default Cook;