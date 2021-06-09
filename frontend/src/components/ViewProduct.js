import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'

const ViewProduct = () => {
    const [product, setProduct] = useState({})
  
    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products`)
    
            setProduct(data)
        }
        fetchProduct()
    }, [])

    return (
        <>
            <Row>
                <Col md={2}>
                <h3>{product.name}</h3>
                </Col>
                <Col md={2}>
                        {product.symbol}
                </Col>
                <Col md={2}>
                        {product.currency}
                </Col>
                <Col md={2}>
                        {product.price}
                </Col>
                
            </Row>
        </>
    )
}

export default ViewProduct
