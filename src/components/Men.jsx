import { Link } from "react-router-dom";

function Men() {
    return (
        <>
            <div id="page">
                <div class="container">
                    <div class="breadcrumbs">
                        <div class="row">
                            <div class="col">
                                <p class="bread"><span><Link to={"/"}>Home</Link></span> / <span>All Products</span> / <span>Men's</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="breadcrumbs-two">
                        <div class="row">
                            <div class="col">
                                <div class="breadcrumbs-img" style={{ backgroundImage: `url(./cover-img-1.jpg)` }}>
                                </div>
                                <div class="menu text-center">
                                    <p><a href="#">New Arrivals</a> <a href="#">Best Sellers</a> <a href="#">Extended Widths</a> <a href="#">Sale</a></p>
                                </div>
                            </div>
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
                                                    <li><a href="#">13.5</a></li>
                                                    <li><a href="#">14</a></li>
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
                                                <li><a href="#">Cream</a></li>
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
                                    <div class="col-sm-12">
                                        <div class="side border mb-1">
                                            <h3>Technologies</h3>
                                            <ul>
                                                <li><a href="#">BioBevel</a></li>
                                                <li><a href="#">Groove</a></li>
                                                <li><a href="#">FlexBevel</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-9 col-xl-9">
                                <div class="row row-pb-md">
                                    <div class="col-lg-4 mb-4 text-center">
                                        <div class="product-entry border">
                                            <a href="#" class="prod-img">
                                                <img src={require("../assets/images/mens/mens1.jpg")} class="img-fluid" alt="Free html5 bootstrap 4 template" />
                                            </a>
                                            <div class="desc">
                                                <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                                <span class="price">$139.00</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-lg-4 mb-4 text-center">
                                        <div class="product-entry border">
                                            <a href="#" class="prod-img">
                                                <img src={require("../assets/images/mens/mens2.jpg")} class="img-fluid" alt="Free html5 bootstrap 4 template" />
                                            </a>
                                            <div class="desc">
                                                <h2><a href="#">Women's Minam Meaghan</a></h2>
                                                <span class="price">$139.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 mb-4 text-center">
                                        <div class="product-entry border">
                                            <a href="#" class="prod-img">
                                                <img src={require("../assets/images/mens/mens3.jpg")} class="img-fluid" alt="Free html5 bootstrap 4 template" />
                                            </a>
                                            <div class="desc">
                                                <h2><a href="#">Men's Taja Commissioner</a></h2>
                                                <span class="price">$139.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-100"></div>
                                    <div class="col-lg-4 mb-4 text-center">
                                        <div class="product-entry border">
                                            <a href="#" class="prod-img">
                                                <img src={require("../assets/images/mens/mens4.jpg")} class="img-fluid" alt="Free html5 bootstrap 4 template" />
                                            </a>
                                            <div class="desc">
                                                <h2><a href="#">Russ Men's Sneakers</a></h2>
                                                <span class="price">$139.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 mb-4 text-center">
                                        <div class="product-entry border">
                                            <a href="#" class="prod-img">
                                                <img src={require("../assets/images/mens/mens5.jpg")} class="img-fluid" alt="Free html5 bootstrap 4 template" />
                                            </a>
                                            <div class="desc">
                                                <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                                <span class="price">$139.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 mb-4 text-center">
                                        <div class="product-entry border">
                                            <a href="#" class="prod-img">
                                                <img src={require("../assets/images/mens/mens6.jpg")} class="img-fluid" alt="Free html5 bootstrap 4 template" />
                                            </a>
                                            <div class="desc">
                                                <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                                <span class="price">$139.00</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <div class="block-27">
                                            <ul>
                                                <li><a href="#"><i class="ion-ios-arrow-back"></i></a></li>
                                                <li class="active"><span>1</span></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li><a href="#"><i class="ion-ios-arrow-forward"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}
export default Men;