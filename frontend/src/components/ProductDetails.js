import React, { useState, useEffect } from 'react'
import { Row, Col, ListGroup, Card } from 'react-bootstrap'
import axios from 'axios'

const ProductDetails = ({ match }) => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        const data =  fetchProduct() 
      }, [])

      const fetchProduct = async (id) => {
          const data = await axios.get(`http://localhost:5000/api/products/${match.params._id}`)
          const result = data.data
          setProduct(result)
          return result
      }

    return (
        <>
           <h3>Product Detail</h3>
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Name :</Col>
                                <Col>
                                    <strong> {product.name}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>symbol :</Col>
                                <Col>
                                    <strong>{product.symbol}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>currency :</Col>
                                <Col>
                                    <strong>{product.currency}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price :</Col>
                                <Col>
                                    <strong>{product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                     </ListGroup>
            </Card>

                </Col>
                <Col md={2}></Col>
            </Row>
            

        </>
    )
}

export default ProductDetails
