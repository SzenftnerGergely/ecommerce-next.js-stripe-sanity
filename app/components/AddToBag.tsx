"use client"

import { Button } from '@/components/ui/button'
import { useShoppingCart } from "use-shopping-cart"
import React from 'react'
import { ProductCart } from '../interface'
import { urlFor } from '../lib/sanity'


const AddToBag = ({currency, description, image, name, price}: ProductCart) => {
    const {addItem, handleCartClick} = useShoppingCart()

    const product = {
        currency: currency, 
        description: description, 
        image: urlFor(image).url(), 
        name: name, 
        price: price,
        id: "id"
    }

    return (
        <Button onClick={() => {
            addItem(product);
            handleCartClick()
        }}>
            Add To Cart
        </Button>
    )
}

export default AddToBag
