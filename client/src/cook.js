import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Cook = () => {
  const {id} = useParams()

  const [cook, setCook] = useState({})

  useEffect(()=> {
    getCook()
  },[])

  const getCook = async () => {
    try {
      console.log('in getCook')
      console.log(`id: ${id}`)
      let res = await axios.get(`/api/cooks/${id}`)
      console.log(res.data)
      setCook(res.data)
    } catch (err) {
      console.log(err)
    }
  }


  return(
    <div style={{background: 'whitesmoke', width: '50%', padding: '2em'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '2em'}}>
        <div>
          <h1>Chef: {cook.name}</h1>
          <p>ID: {cook.id}</p>
          <h2>Specialty: {cook.specialty}</h2>
        </div>
        <div>
          <Link to="/cooks">
            <Button>Back to Cooks</Button>
          </Link>
        </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Link to={`/cooks/${cook.id}/update`}>
          <Button>Update</Button>
        </Link>
        <Button>Delete</Button>
      </div>
    </div>
  )
}



export default Cook;