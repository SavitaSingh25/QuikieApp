import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'


const ViewProduct = () => {
    const [product, setProduct] = useState([])
    const history = useHistory();
  
        useEffect(() => {
          const data =  fetchProduct()
         // DeleteAction()
         
        }, [])

        const fetchProduct = async () => {
            const data = await axios.get('http://localhost:5000/api/products')

            const result = data.data
            setProduct(result)
            console.log('view',result)
            return result
        }

        const DeleteAction = async(id) => {
            const data = await axios.delete('http://localhost:5000/api/products/'+id)
            window.alert('Are you sure to delete?')
             history.push('/view')
        }


    return (
        <>
        <LinkContainer to='/'>
             <Button variant="info" size="sm">Home</Button>
         </LinkContainer>
         
        <h1>All Products</h1>
        <br/>
        <Row>
        <Col md={2}>
                <h3>Id</h3>
                </Col>
                 <Col md={2}>
                <h3>Name</h3>
                </Col>
                <Col md={2}>
                <h3>symbol</h3>
                </Col>
                <Col md={2}>
                <h3>currency</h3>
                </Col>
                <Col md={2}>
                <h3>price</h3>
                </Col>
                <Col md={2}>
                <h3>Action</h3>
                </Col>
        </Row>
        {product.map(Item => (
            <Row Key={Item.id}>
                
                <Col md={2}>
                   {Item._id}
                </Col>
                <Col md={2}>
                   {Item.name}
                </Col>
                <Col md={2}>
                    {Item.symbol}
                </Col>
                <Col md={2}>
                    {Item.currency}
                </Col>
                <Col md={2}>
                    {Item.price}
                </Col>
                <Col md={2}>
                    <Button variant="outline-danger" onClick={()=>DeleteAction(Item._id)}>Delete</Button>
                </Col>
            </Row>
               ))}   
        </>
    )
}

export default ViewProduct
