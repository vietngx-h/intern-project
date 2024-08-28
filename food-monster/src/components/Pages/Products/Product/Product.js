import Products from "../Products";
import React, {useEffect, useState} from "react";
import {FaProductHunt} from "react-icons/fa";
import axios from "axios";
import {useParams} from "react-router-dom";

const Product = () => {
    const [product, setProducts] = useState([]);  // State to hold product data
    const [loading, setLoading] = useState(true);  // State to handle loading state
    const [error, setError] = useState(null);  // State to handle errors
    const params = useParams()
    console.log("params",params)

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3002/product/${params.id}`);
            setProducts(response.data);  // Update state with the fetched products
        } catch (error) {
            setError(error);  // Handle any errors
            console.error(error);
        } finally {
            setLoading(false);  // Set loading to false after the request is complete
        }
    };
    console.log("product",product)

    useEffect(() => {
        getProduct();
    }, []);
    if (loading) return <div>Loading...</div>;  // Show loading state
    if (error) return <div>Error: {error.message}</div>;  // Show error state

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div key={product.id}>
                <img
                    className="w-full h-64 object-cover object-center"
                    src={`http://localhost:3002/assets/${product.images}`}
                    alt={product.name}
                />
                <div className="p-6">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize mb-2">{product.name}</h1>
                    <p className="text-gray-500 text-lg mb-4">${product.price.toFixed(2)}</p>
                    <p className="text-gray-700 text-base mb-6">{product.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Comments</h2>
                        <p className="text-gray-600 text-sm">{product.comments}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )};

    export default Product;
