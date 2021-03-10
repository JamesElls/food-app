import { useParams } from 'react-router-dom';

const Cook = () => {
  const {id, name, specialty} = useParams()
  const params = useParams("")
  console.log(params)

  return(
    <div>
      <h1>Cook Page</h1>
      <p>Name: {name}</p>
      <p>Specialty: {specialty}</p>
      <p>ID: {id}</p>
    </div>
  )
}



export default Cook;