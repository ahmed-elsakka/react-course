import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            const foundProduct = data.find(item => item.id === parseInt(id));
            setProduct(foundProduct);
        });
    }, [id]);

    if(!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Online Shopping</h1>
            <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-lg shadow-md mb-6" />
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600 mb-4">${product.price}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Add to Cart</button>
        </div>
    );
}

export default ProductDetails;