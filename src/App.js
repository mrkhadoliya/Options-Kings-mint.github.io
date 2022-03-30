import React from 'react' 
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import FooterSections from './Components/FooterPage/FooterSections';

import Header  from './Components/HeaderSections/Header'
import HomeIndex from './View/HomePage/HomeIndex';

const App = () => {
  return (
    <>
        <Router> 
          <Header/>
          <HomeIndex/>
          <FooterSections/>
        </Router>
    </>
  )
}


export default App;