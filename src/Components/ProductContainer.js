import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Backdrop, CircularProgress, Grid, Typography } from '@mui/material';
import electronicsCatalog from './Data/electronicsCatalog.json';

export default function ProductContainer() {
    const productsChunkSize = 8;
    const [products, setProducts] = useState([]);
    const [displayedProductCount, setDisplayedProductCount] = useState(productsChunkSize);
    const [loading, setLoading] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement || document.body;
        const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 600;
        if (scrolledToBottom && !loading && !allLoaded) {
            setLoading(true);
            setTimeout(() => {
                const nextDisplayCount = Math.min(displayedProductCount + productsChunkSize, electronicsCatalog.length);
                setDisplayedProductCount(nextDisplayCount);
                setLoading(false);
                setAllLoaded(nextDisplayCount >= electronicsCatalog.length);
            }, 2000);
        }
    };

    useEffect(() => {
        const displayedProducts = electronicsCatalog.slice(0, displayedProductCount);
        setProducts(displayedProducts);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [displayedProductCount]);

    return (
        <Grid container spacing={2} sx={{ padding: '60px' }}>
            {products.map((product, index) => (
                <Grid item key={index} xs={12} sm={6} md={3}>
                    <ProductCard
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        imageUrls={product.imageUrls}
                    />
                </Grid>
            ))}
            {!allLoaded && (
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
                    <CircularProgress color="inherit" />
                    <Typography variant="h6" color="inherit" sx={{ ml: 2 }}>Loading more products...</Typography>
                </Backdrop>
            )}
        </Grid>
    );
}
