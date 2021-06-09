import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Row, Col, Button } from 'react-bootstrap'
import FetchProducts from './FetchProducts'

const Home = () => {
/*
    useEffect(() => {
        const data= FetchProducts()   
       }, [])
*/
      const [record, setRecord] = useState([])

    useEffect(() => {
         const data= FetchProductDetail()   
        }, [])
   
 const FetchProductDetail = async() => {
       
       const data= await FetchProducts()
       setRecord(data)
       return data
      }


    return (
        <>
            <Row>
                    {record.map(product => (
                        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <FetchProducts product={product} />
                        </Col>
                    ))}
            </Row>

        </>
    )
}

export default Home
