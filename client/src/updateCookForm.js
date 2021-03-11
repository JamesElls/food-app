import { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const UpdateCookForm= () => {
  const { id } = useParams()
  const history = useHistory()

  const [name, setName] = useState('')
  const [specialty, setSpecialty] = useState('')
  
  
  useEffect(()=>{
    getCook()
  },[])
  
  const getCook = async () => {
    try {
      let res = await axios.get(`/api/cooks/${id}`)
      setName(res.data.name)
      setSpecialty(res.data.specialty)
    } catch (err) {
      console.log(err)
    }
  }
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      try {
        axios.put(`/api/cooks/${id}`, {name, specialty})
        history.goBack()
      } catch (err) {
        console.log(err)
      }
    }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} defaultValue={name} placeholder='Name' />
      </Form.Field>
      <Form.Field>
        <label>Specialty</label>
        <input value={specialty} onChange={(e)=>setSpecialty(e.target.value)} defaultValue={specialty} placeholder='Specialty' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
      <Button onClick={()=>history.push("/cooks")}>Cancel</Button>
    </Form>
  )
}

export default UpdateCookForm;
