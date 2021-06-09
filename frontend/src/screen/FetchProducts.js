import React from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



const FetchProducts = async() =>  {
    try {
        const  data  = await axios.get('https://api.nomics.com/v1/currencies/ticker?key=a7eec2ba1c39174bd0fbe63ab8965a1eb36743e2&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1')
        //console.log(data)
        return data.data
    } catch (error) {
       console.log(error)
    }
}

export default FetchProducts;