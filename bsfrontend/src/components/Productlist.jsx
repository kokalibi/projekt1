import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.error("There was an error fetching the products!", error);
        });
    }, []);
    return(
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>products</Card.Title>
        <Card.Text>
            {products && products.products && products.products.length > 0 ? (
                <ul>
                    {products.products.map((product) => (
                        <li key={product.id}>{product.title} - ${product.price}</li>
                    ))}
                </ul>
            ) : (
                <p>No products available.</p>
            )}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
        </Card>
        </div>
    )
}