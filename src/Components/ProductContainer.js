import React from 'react'
import ProductCard from './ProductCard'
import { Grid } from '@mui/material'
import Products from './Data/Products.json'

export default function ProductContainer() {
    return (
        <>
            <Grid container spacing={1} sx={{ padding: "20px" }}>
                {Products.map((product, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>
                        <ProductCard
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                            imageUrls={product.imageUrls}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
