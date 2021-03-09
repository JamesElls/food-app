import './App.css';
import {Route, Switch} from 'react-router-dom'
import Foods from './Foods';
import Restaurant from './restaurant';
import Food from './rood';
import NavBar from './Navbar';
import { Container } from 'semantic-ui-react';
import Cook from './cook';

function App() {
  return (
    <>
     <NavBar />
     <Container>
       <Switch>
        <Route exact path='/' component={Foods} />
        <Route exact path='/restaurant' component={Restaurant} />
        <Route exact path='/food' component={Food} />
        <Route exact path='/foods' component={Foods} />
        <Route exact path='/cook/:id' component={Cook} />
       </Switch>
      </Container>
    </>

  );
}

export default App;
