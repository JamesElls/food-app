import axios from 'axios'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'


const newCookForm= () => {
  const [name, setName] = useState ('')
  const [specialty, setSpecialty] = useState ('')
  const history = useHistory()

  const handleSubmit = async ()=>{
    try{
      addCooks({name, specialty})
      // axios.post(`/api/cooks`,)
      // history.push(`/cooks`)
    } catch (err){
      alert('Error!')
    }
  }
  
  
  return(
  <div>
    <h1>New Cook Form</h1>
    <Form onSubmit={handleSubmit}>
                <Form.Field>
                      <label>Name</label>
                      <input 
                      value={name}
                      onChange={(e)=> setName(e.target.value)}
                      defaultValue={name} 
                      placeholder='Name' />
                  </Form.Field>
                  <Form.Field>
                      <label>Specialty</label>
                      <input 
                      value={specialty}
                      onChange={(e)=> setSpecialty(e.target.value)}
                      defaultValue={specialty} 
                      placeholder='Specialty' />
                  </Form.Field>

                  <Button type='submit'>Submit</Button>
              </Form>
  </div>
  )
}

export default newCookForm;
