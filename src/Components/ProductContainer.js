import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Backdrop, CircularProgress, Grid, Skeleton, Typography } from '@mui/material';
import Products from './Data/Products.json';

export default function ProductContainer() {
    const productsChunkSize = 8;
    const [products, setProducts] = useState([]);
    const [displayedProductCount, setDisplayedProductCount] = useState(productsChunkSize);
    const [loading, setLoading] = useState(false);

    const handleScroll = () => {
        const scrollTop =
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        const scrollHeight =
            (document.documentElement && document.documentElement.scrollHeight) ||
            document.body.scrollHeight;
        const clientHeight =
            document.documentElement.clientHeight || window.innerHeight;
        const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        if (scrolledToBottom && !loading) {
            setLoading(true);
            setTimeout(() => {
                const nextDisplayCount = Math.min(displayedProductCount + productsChunkSize, Products.length);
                setDisplayedProductCount(nextDisplayCount);
                setLoading(false);
            }, 1000);
        }
    };

    useEffect(() => {
        const displayedProducts = Products.slice(0, displayedProductCount);
        setProducts(displayedProducts);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [displayedProductCount]);

    return (
        <>
            <Grid container spacing={1} sx={{ padding: '20px' }}>
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
            </Grid>
            {loading && (
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                    <Typography variant="h6" color="inherit" sx={{ ml: 2 }}>Loading more products...</Typography>
                </Backdrop>
            )}
        </>
    );
}
