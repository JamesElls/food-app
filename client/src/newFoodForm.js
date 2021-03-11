import axios from 'axios'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'


const NewFoodForm= () => {
  const [name, setName] = useState ('')
  
  const history = useHistory()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      axios.post(`/api/foods`, {name})
      history.push(`/foods`)
      window.location.reload()
    } catch (err){
      alert('Error!')
    }
  }
  
  
  return(
    <div>
      <h1>New Food Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input 
          value={name}
          onChange={(e)=> setName(e.target.value)}
          defaultValue={name} 
          placeholder='Name' />
        </Form.Field>

        <Button type='submit'>Submit</Button>
        <Button onClick={()=>history.push("/foods")}>Cancel</Button>
      </Form>
    </div>
  )
}

export default NewFoodForm;
