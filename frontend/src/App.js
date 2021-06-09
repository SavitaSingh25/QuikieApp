import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Products from './components/Products'
import ViewProduct from './components/ViewProduct'
import ProductDetails from './components/ProductDetails'


function App() {
  return (
    <Router>
    
    <main className='py-3'>
      <Container>
          <Route path='/' component={Products}  exact /> 
          <Route path='/view' component={ViewProduct} />  
           <Route path='/productdetail' component={ProductDetails} />
       </Container>
    </main>
   
  </Router>
  );
}

export default App;
