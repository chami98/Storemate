import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

export default function ProductCard({ name, price, quantity, imageUrls }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 'auto',
        boxShadow: '0px 3px 10px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.04)',
        },
      }}
    >
      <CardMedia
        sx={{
          height: "30vh",
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: `${index * 100}%`,
              transition: 'transform 0.9s ease-in-out',
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          />
        ))}
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
          <LocalOfferOutlinedIcon sx={{ marginRight: 0.5, fontSize: 'medium' }} />
          Price: ${price.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
          <StorefrontOutlinedIcon sx={{ marginRight: 0.5, fontSize: 'medium' }} />
          Quantity: {quantity}
        </Typography>
      </CardContent>
    </Card>
  );
}
