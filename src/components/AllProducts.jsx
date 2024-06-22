import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToCart } from "../state/cartSlice";


function AllProducts() {

    let dispatch = useDispatch();
    const [newProducts, setNewProducts] = useState([]);

    function addLoadData() {
        axios.get("https://663daf0fe1913c47679502b5.mockapi.io/footerwear")
            .then((res) => {
                // console.log(res.data);
                setNewProducts(res.data)
            })
    };

    useEffect(() => {
        addLoadData();
    }, []);

    function addProductToCart(product) {
        let cartProduct = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1
        }
        
        console.log(cartProduct);
        dispatch(addToCart(cartProduct))

    }

    return (
        <>
            <div class="container">
                <div class="breadcrumbs">
                    <div class="row">
                        {/* <div class="col"> */}
                        <p class="bread"><span><Link to={"/"}>Home</Link></span> / <span>All Products</span></p>

                    </div>
                </div>
            </div>
            <div class="container">
                <div class="colorlib-product">
                    <div class="row">
                        <div class="col-lg-3 col-xl-3">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="side border mb-1">
                                        <h3>Category</h3>
                                        <ul>
                                            <li><Link to={"/men"}>Men's</Link> </li>
                                            <li><Link to={"/women"}>Women's</Link></li>
                                            <li><Link to={"/kids"}>Kid's</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="side border mb-1">
                                        <h3>Brand</h3>
                                        <ul>
                                            <li><a href="#">Nike</a></li>
                                            <li><a href="#">Adidas</a></li>
                                            <li><a href="#">Merrel</a></li>
                                            <li><a href="#">Gucci</a></li>
                                            <li><a href="#">Skechers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="side border mb-1">
                                        <h3>Size/Width</h3>
                                        <div class="block-26 mb-2">
                                            <h4>Size</h4>
                                            <ul>
                                                <li><a href="#">7</a></li>
                                                <li><a href="#">7.5</a></li>
                                                <li><a href="#">8</a></li>
                                                <li><a href="#">8.5</a></li>
                                                <li><a href="#">9</a></li>
                                                <li><a href="#">9.5</a></li>
                                                <li><a href="#">10</a></li>
                                                <li><a href="#">10.5</a></li>
                                                <li><a href="#">11</a></li>
                                                <li><a href="#">11.5</a></li>
                                                <li><a href="#">12</a></li>
                                                <li><a href="#">12.5</a></li>
                                                <li><a href="#">13</a></li>
                                            </ul>
                                        </div>
                                        <div class="block-26">
                                            <h4>Width</h4>
                                            <ul>
                                                <li><a href="#">M</a></li>
                                                <li><a href="#">W</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="side border mb-1">
                                        <h3>Style</h3>
                                        <ul>
                                            <li><a href="#">Slip Ons</a></li>
                                            <li><a href="#">Boots</a></li>
                                            <li><a href="#">Sandals</a></li>
                                            <li><a href="#">Lace Ups</a></li>
                                            <li><a href="#">Oxfords</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="side border mb-1">
                                        <h3>Colors</h3>
                                        <ul>
                                            <li><a href="#">Black</a></li>
                                            <li><a href="#">White</a></li>
                                            <li><a href="#">Blue</a></li>
                                            <li><a href="#">Red</a></li>
                                            <li><a href="#">Green</a></li>
                                            <li><a href="#">Grey</a></li>
                                            <li><a href="#">Orange</a></li>
                                            <li><a href="#">Brown</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="side border mb-1">
                                        <h3>Material</h3>
                                        <ul>
                                            <li><a href="#">Leather</a></li>
                                            <li><a href="#">Suede</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-9 col-xl-9">
                            <div class="row row-pb-md">

                                {
                                    newProducts.map((eachData, i) => {
                                        return (
                                            <>
                                                <div className="col-lg-4 mb-4">
                                                    <div className="product-entry border p-1">
                                                        <img src={eachData.image} style={{ width: "100%", height: "270px" }} />
                                                        <div className="card-body">
                                                            <h5>{eachData.title}</h5>
                                                            <h6>Brand:&nbsp;{eachData.brand}</h6>
                                                            <h6>₹{eachData.price}&nbsp;&nbsp;<del>₹{eachData.mrp}</del></h6>
                                                            <button onClick={() => addProductToCart(eachData)} className="btn btn-dark">Add to Card</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default AllProducts;