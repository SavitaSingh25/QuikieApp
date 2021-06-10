import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Row, Col, Button } from 'react-bootstrap'
import FetchProducts from '../screen/FetchProducts'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

const Products = () => {
    const [record, setRecord] = useState([])
    var [buttonvalue, setButtonvalue] = useState('')

    const history = useHistory();

 useEffect(() => {
      const data= FetchProductDetail()   
     }, [])

   const FetchProductDetail = async() => {
    
    const data= await FetchProducts()
    setRecord(data)
    return data
   }
     
   const SaveData = async(name,symbol,currency,price) => {
    
    //const productData = {"name":name,"symbol":symbol,"currency":currency
    
    const data = await axios.post('http://localhost:5000/api/products/addProduct',{
        "name": name,
        "symbol": symbol,
        "currency": currency,
        "price": price
    })

    data!==null ? localStorage.setItem('btnval',data.data.name) : setButtonvalue("false") 
    history.push('/')
    return data
   }

    return (
        <>
        <Link to='/view'>View All Products</Link><br />
         <Row>
            {record.map(product => (
                <Col  sm={12} md={6} lg={4} xl={3}>
                    <Card key={product.id}>
                        <Card.Body>
                                <Card.Title as='h3'>
                                {product.name}
                                </Card.Title>
                                    <Card.Text as='div'>
                                Symbol: {product.symbol}
                                </Card.Text>
                                <Card.Text as='div'>
                                Currency: {product.currency}
                                </Card.Text>
                                <Card.Text as='div'>
                                Price: {product.price}
                                </Card.Text>
                               {/* 
                                <Button variant="info" size="sm" onClick={()=>SaveData(product.name, product.symbol, product.currency, product.price)}> 
                                {buttonvalue===product.name ? "View Data" : "Save Data" }</Button>
                                {console.log('condIn',buttonvalue)}

                                <LinkContainer to={`/productdetail?id=${product._id}`}>
                                */}
                            
                               {console.log('btnvaluue',buttonvalue)}
                                 {localStorage.btnval===product.name ? 
                               <LinkContainer to={`/view`}>
                                 <Button variant="info" size="sm">View Data</Button>
                               </LinkContainer>
                                   :
                                 <Button variant="info" size="sm" onClick={()=>SaveData(product.name, product.symbol, product.currency, product.price)}>Save Data </Button> 
                                  
                               }    
                                
                        </Card.Body>
                    </Card>
                </Col>
            ))}    
       </Row>
     </>
    )
}

export default Products
