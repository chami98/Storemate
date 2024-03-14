import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function ProductCard({ name, price, quantity, imageUrls }) {

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageUrls.length]);
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: '0px 3px 10px rgba(0,0,0,0.1)' }}>
      <CardMedia
        sx={{ height: 200 }}
        image={imageUrls[currentImageIndex]}
        title="Product Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
          <MonetizationOnIcon sx={{ marginRight: 1 }} />
          Price: ${price.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
          <ShoppingCartIcon sx={{ marginRight: 1 }} />
          Quantity: {quantity}
        </Typography>
      </CardContent>
    </Card>
  );
}
