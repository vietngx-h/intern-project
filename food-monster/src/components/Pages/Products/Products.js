import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaProductHunt } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);  // State to hold product data
    const [loading, setLoading] = useState(true);  // State to handle loading state
    const [error, setError] = useState(null);  // State to handle errors
    const navigate = useNavigate()


    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3002/products');
            setProducts(response.data);  // Update state with the fetched products
        } catch (error) {
            setError(error);  // Handle any errors
            console.error(error);
        } finally {
            setLoading(false);  // Set loading to false after the request is complete
        }
    };

    useEffect(() => {
        getProducts();
    }, []);  // Empty dependency array ensures this runs once on mount

    if (loading) return <div>Loading...</div>;  // Show loading state
    if (error) return <div>Error: {error.message}</div>;  // Show error state


    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="text-center mb-8">
                <FaProductHunt className="mx-auto w-20 h-20 text-red-500 mb-4" />
                <h4 className="text-3xl font-bold text-gray-800">Products Information</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {products.map(item => (
                    <div
                        key={item.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4"
                    >
                        <img
                            src={`http://localhost:3002/assets/${item.images}`}
                            alt={item.name}
                            className="w-full h-64 object-cover mb-4 rounded-md"
                        />
                        <div className="text-center">
                            <p className="text-xl font-semibold capitalize mb-2">{item.name}</p>
                            <p className="text-lg text-gray-700 mb-4">${item.price.toFixed(2)}</p>
                        </div>
                        <button
                            onClick={() => navigate(`/product/${item.id}`)}
                            className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                        >
                            Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Products;
