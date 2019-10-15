import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie'
import NotFound from '../elements/NotFound/NotFound';
import {API_URL} from '../../config';

console.log(API_URL)
const App = () =>  {
return `<h1>${ process.env.REACT_APP_API_URL}</h1>`; 
  // (
  //   <BrowserRouter>
  //     <React.Fragment>
  //       <Header />
  //       <Switch>
  //         <Route path="/" component={Home} exact />
  //         <Route path="/:movieId" component={Movie} exact /> 
  //         <Route component={NotFound} />
  //       </Switch>
  //     </React.Fragment>
  //   </BrowserRouter>
  // )
}

export default App;