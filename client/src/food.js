import {useState, useEffect} from 'react'
import axios from 'axios'
import { Card , Button, CardHeader} from "semantic-ui-react"
import { useParams, useHistory, Link } from 'react-router-dom'
import Restaurant from './restaurant'

const Food = () => {
    const { id } = useParams()
    

  return(
    <Card>
        <Card.Header style={{display:'flex', justifyContent:'space-between'}}>
            wow
        </Card.Header>
    </Card>
  )
}

export default Food;
