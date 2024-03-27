import React, { useState } from 'react'
import {faker} from '@faker-js/faker'
import { cartReducer, productReducer } from './Reducer'
import { useReducer } from 'react'
import Context from './Context'

const MyState = (props) => {
    faker.seed(99)   // data will be const
    const [products, setProducts] =useState([...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        productName:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.business(),
        inStock:faker.random.numeric(),
        fastDelivery:faker.datatype.boolean(),
        rating:faker.random.numeric()
    })))
    const [state,dispatch]=useReducer(cartReducer, {products:products,cart:[]})
    const [productState, productDispatcher]= useReducer(productReducer, {
        byStock:true,
        byFastDelivery:false,
        byRating:21,
        sort:''
    })
    return (
    <div>
        <Context.Provider value={{state, dispatch, productDispatcher,productState }}>
            {props.children}
        </Context.Provider>
    </div>
  )
}

export default MyState