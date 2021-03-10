import axios from 'axios';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import { Button, Card } from 'semantic-ui-react';

const Cook = () => {
  const {id} = useParams()

  const [cook, setCook] = useState({})

  useEffect(()=>{
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
    <div>
      <h1>Chef: {cook.name}</h1>
      <p>ID: {cook.id}</p>
      <h2>Specialty: {cook.specialty}</h2>

      <div>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  )
}



export default Cook;