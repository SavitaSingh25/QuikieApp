import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Row, Col, Button } from 'react-bootstrap'
import FetchProducts from '../screen/FetchProducts'

const Products = () => {
    const [record, setRecord] = useState([])

 useEffect(() => {
      const data= FetchProductDetail()   
     }, [])

   const FetchProductDetail = async() => {
    
    const data= await FetchProducts()
    setRecord(data)
    return data
   }
     
   const SaveData = async(name,symbol,currency,price) => {
       
    //debugger
    console.log('savedata',name, symbol,currency,price)
    //debugger
   
   }

    return (
        <>
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
                                <Button variant="outline-danger" onClick={SaveData(product.name, product.symbol, product.currency, product.price)}> Save Data </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}    
       </Row>
     </>
    )
}

export default Products
