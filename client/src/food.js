import {useState, useEffect} from 'react'
import axios from 'axios'
import { Card , Button, CardHeader} from "semantic-ui-react"
import { useParams, useHistory, Link } from 'react-router-dom'
import Restaurant from './restaurant'

const Food = () => {
    const { id } = useParams()
    

  return(
    <div>
      <h1>Please work</h1>
    </div>
  )
}

export default Food;
