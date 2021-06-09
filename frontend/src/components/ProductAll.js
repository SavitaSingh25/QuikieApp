import React from 'react'

const ProductAll = ({product}) => {
    return (
        <>
           <Card>
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
        </>
    )
}

export default ProductAll
