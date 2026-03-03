import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => navigate('/404'));
  }, [id, navigate]);

  if (!product) return <div className="status">Betöltés...</div>;

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)}>← Vissza</button>
      <div className="details-content">
        <img src={product.thumbnail} alt={product.title} />
        <h1>{product.title}</h1>
        <p><strong>Kategória:</strong> {product.category}</p>
        <p><strong>Ár:</strong> {product.price} $</p>
        <p><strong>Leírás:</strong> {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;