import './App.css';
import {Route, Switch} from 'react-router-dom'
import Foods from './foods';
import Restaurant from './restaurant';
import Food from './food';
import NavBar from './navbar';
import { Container } from 'semantic-ui-react';
import Cook from './cook';
import Cooks from './cooks';
import UpdateCookForm from './updateCookForm';
import NewCookForm from './newCookForm';
import UpdateRestaurantForm from './UpdateRestaurantForm';
import UpdateFoodForm from './updateFoodForm'
import NewFoodForm from './newFoodForm';


function App() {
  return (
    <>
     <NavBar />
     <Container>
       <Switch>
        <Route exact path='/' component={Foods} />
        <Route exact path='/restaurant' component={Restaurant} />
        <Route exact path='/foods/new' component={NewFoodForm} />
        <Route exact path='/foods/:id/update' component={UpdateFoodForm} />
        <Route exact path='/foods/:id' component={Food} />
        <Route exact path='/foods' component={Foods} />
        <Route exact path='/foods/:food_id/restaurants/:id/update' component={UpdateRestaurantForm} />
        <Route exact path='/cooks' component={Cooks} />
        <Route exact path='/cooks/new' component={NewCookForm} />
        <Route exact path='/cooks/:id' component={Cook} />
        <Route exact path='/cooks/:id/update' component={UpdateCookForm} />
       </Switch>
      </Container>
    </>

    

  );
}

export default App;
