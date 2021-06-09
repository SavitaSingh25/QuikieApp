import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Products from './components/Products'
import ViewProduct from './components/ViewProduct'
import Home from './screen/Home'


function App() {
  return (
    <Router>
    
    <main className='py-3'>
      <Container>
          <Route path='/' component={Products} /> 
          <Route path='/home' component={Home} />   
          <Route path='/view' component={ViewProduct} />   
       </Container>
    </main>
   
  </Router>
  );
}

export default App;
