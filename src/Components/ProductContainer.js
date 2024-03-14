import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Grid, Skeleton } from '@mui/material'; // Import Skeleton component
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
                setDisplayedProductCount(prevCount => prevCount + productsChunkSize);
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
                ))}</Grid>
            {loading && (
                <Grid container spacing={1} sx={{ padding: '20px' }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Skeleton variant="rectangular" sx={{ maxWidth: 345, margin: 'auto', boxShadow: '0px 3px 10px rgba(0,0,0,0.1)', height: 250 }}>
                            <Skeleton variant="rectangular" sx={{ height: 200 }} />
                            <Skeleton sx={{ padding: '1rem' }}>
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                            </Skeleton>
                        </Skeleton>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Skeleton variant="rectangular" sx={{ maxWidth: 345, margin: 'auto', boxShadow: '0px 3px 10px rgba(0,0,0,0.1)', height: 250 }}>
                            <Skeleton variant="rectangular" sx={{ height: 200 }} />
                            <Skeleton sx={{ padding: '1rem' }}>
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                            </Skeleton>
                        </Skeleton>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Skeleton variant="rectangular" sx={{ maxWidth: 345, margin: 'auto', boxShadow: '0px 3px 10px rgba(0,0,0,0.1)', height: 250 }}>
                            <Skeleton variant="rectangular" sx={{ height: 200 }} />
                            <Skeleton sx={{ padding: '1rem' }}>
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                            </Skeleton>
                        </Skeleton>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Skeleton variant="rectangular" sx={{ maxWidth: 345, margin: 'auto', boxShadow: '0px 3px 10px rgba(0,0,0,0.1)', height: 250 }}>
                            <Skeleton variant="rectangular" sx={{ height: 200 }} />
                            <Skeleton sx={{ padding: '1rem' }}>
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                                <Skeleton variant="text" sx={{ marginBottom: '0.5rem' }} />
                            </Skeleton>
                        </Skeleton>
                    </Grid>
                </Grid>
            )}
        </>


    );
}
