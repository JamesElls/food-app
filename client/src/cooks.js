import axios from 'axios';
import { useState, useEffect } from 'react';
import Cook from './cook';
import { Link } from 'react-router-dom';

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
        <Link to={`cooks/${cook.id}/${cook.name}/${cook.specialty}`}>
          <div>
            {cook.name}
          </div>
        </Link>

      )
    })
  }

  return(
    <div>
      <h1>Cooks Page</h1>
      {renderCooks()}
    </div>
  )
}


export default Cooks;