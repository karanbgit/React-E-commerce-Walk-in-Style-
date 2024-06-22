import { Link } from "react-router-dom";


function ProductDetail() {
    return (
        <>
            <div class="breadcrumbs">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <p class="bread"><span><Link to={"/"}>Home</Link></span> / <span>Product Details</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="colorlib-product">
                <div class="container">
                    <div class="row row-pb-lg product-detail-wrap">
                        <div class="col-sm-8">
                            <div class="carousel">
                                <div class="item">
                                    <div class="product-entry border">
                                        <a href="#" class="prod-img">
                                            <img src={require("../assets/images/item-2.jpg")} class="img-fluid"
                                                alt="Free html5 bootstrap 4 template" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="product-desc">
                                <h3>Women's Boots Shoes Maca</h3>
                                <div>
                                    <h3>$68.00</h3>
                                    <div>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <span> (98%)</span>
                                </div>

                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                    unorthographic life One day however a small line of blind text by the name of Lorem
                                    Ipsum decided to leave for the far World of Grammar.</p>
                                <div class="size-wrap">
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
                                    <div class="block-26 mb-4">
                                        <h4>Width</h4>
                                        <ul>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">W</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="input-group mb-4">
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
                                            <i class="fa-solid fa-minus"></i>
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100" />
                                    <span class="input-group-btn ml-1">
                                        <button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </span>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 text-center">
                                        <p class="addtocart"><Link to={"/cart"} class="btn btn-primary btn-addtocart">
                                            <i class="fa-solid fa-cart-shopping"></i> Add to Cart</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -----------------NAV Pills Used--------- */}


                    <div class="row">
                        <div class="col-sm-12">
                            <div class="row"></div>
                            <div class="col-md-12 pills">
                                <div class="bd-example bd-example-tabs">

                                    <ul class="nav nav-pills mb-3" role="tablist">

                                        <li class="nav-item">
                                            <a class="nav-link active" id="pills-description-tab" data-bs-toggle="pill"
                                                href="#pills-description" role="tab" aria-controls="pills-description"
                                                aria-expanded="true">Description</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-manufacturer-tab" data-bs-toggle="pill"
                                                href="#pills-manufacturer" role="tab" aria-controls="pills-manufacturer"
                                                aria-expanded="true">Manufacturer</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-review-tab" data-bs-toggle="pill"
                                                href="#pills-review" role="tab" aria-controls="pills-review"
                                                aria-expanded="true">Review</a>
                                        </li>
                                    </ul>

                                    <div class="tab-content" id="pills-tabContent">

                                        {/* ------------------Description----------- */}

                                        <div class="container tab-pane border fade show active" id="pills-description"
                                            role="tabpanel" aria-labelledby="pills-description-tab">
                                            <p>Even the all-powerful Pointing has no control about the blind texts it is
                                                an almost unorthographic life One day however a small line of blind text
                                                by the name of Lorem Ipsum decided to leave for the far World of
                                                Grammar.</p>
                                            <p>When she reached the first hills of the Italic Mountains, she had a last
                                                view back on the skyline of her hometown Bookmarksgrove, the headline of
                                                Alphabet Village and the subline of her own road, the Line Lane. Pityful
                                                a rethoric question ran over her cheek, then she continued her way.</p>
                                            <ul>
                                                <li>The Big Oxmox advised her not to do so</li>
                                                <li>Because there were thousands of bad Commas</li>
                                                <li>Wild Question Marks and devious Semikoli</li>
                                                <li>She packed her seven versalia</li>
                                                <li>tial into the belt and made herself on the way.</li>
                                            </ul>
                                        </div>


                                        {/* --------------Manufacturer------------ */}
                                        <div class="tab-pane border fade" id="pills-manufacturer" role="tabpanel"
                                            aria-labelledby="pills-manufacturer-tab">
                                            <p>Even the all-powerful Pointing has no control about the blind texts it is
                                                an almost unorthographic life One day however a small line of blind text
                                                by the name of Lorem Ipsum decided to leave for the far World of
                                                Grammar.</p>
                                            <p>When she reached the first hills of the Italic Mountains, she had a last
                                                view back on the skyline of her hometown Bookmarksgrove, the headline of
                                                Alphabet Village and the subline of her own road, the Line Lane. Pityful
                                                a rethoric question ran over her cheek, then she continued her way.</p>
                                        </div>


                                        {/* -------------------Review----------------- */}

                                        <div class="tab-pane border fade" id="pills-review" role="tabpanel"
                                            aria-labelledby="pills-review-tab">
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <h3 class="head">23 Reviews</h3>
                                                    <div class="review">
                                                        <div class="user-img"
                                                            style={{ backgroundImage: "url(./person1.jpg)" }}></div>
                                                        <div class="desc">
                                                            <h4>
                                                                <span class="text-left">Jacob Webb</span>
                                                                <span class="text-right">14 March 2024</span>
                                                            </h4>

                                                            <div>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                            </div>
                                                            <p>When she reached the first hills of the Italic Mountains,
                                                                she had a last view back on the skyline of her hometown
                                                                Bookmarksgrov</p>
                                                        </div>
                                                    </div>
                                                    <div class="review">
                                                        <div class="user-img"
                                                            style={{ backgroundImage: "url(./person2.jpg)" }}></div>
                                                        <div class="desc">
                                                            <h4>
                                                                <span class="text-left">Jacob Webb</span>
                                                                <span class="text-right">22 April 2024</span>
                                                            </h4>

                                                            <div>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star"></span>
                                                            </div>


                                                            <p>When she reached the first hills of the Italic Mountains,
                                                                she had a last view back on the skyline of her hometown
                                                                Bookmarksgrov</p>
                                                        </div>
                                                    </div>
                                                    <div class="review">
                                                        <div class="user-img"
                                                            style={{ backgroundImage: "url(./person3.jpg)" }}></div>
                                                        <div class="desc">
                                                            <h4>
                                                                <span class="text-left">Jacob Webb</span>
                                                                <span class="text-right">26 May 2024</span>
                                                            </h4>

                                                            <div>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star"></span>
                                                                <span class="fa fa-star"></span>
                                                            </div>
                                                            <p>When she reached the first hills of the Italic Mountains,
                                                                she had a last view back on the skyline of her hometown
                                                                Bookmarksgrov</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="rating-wrap">
                                                        <h3 class="head">Give a Review</h3>
                                                        <div class="wrap">
                                                            <div className="mt-3">
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span> (98%)</span>
                                                                <span style={{ float: "right" }}>20 Reviews</span>
                                                            </div>


                                                            <div className="mt-3">
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star"></span>
                                                                <span> (85%)</span>
                                                                <span style={{ float: "right" }}>10 Reviews</span>
                                                            </div>


                                                            <div className="mt-3">
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star "></span>
                                                                <span class="fa fa-star"></span>
                                                                <span> (70%)</span>
                                                                <span style={{ float: "right" }}>5 Reviews</span>
                                                            </div>


                                                            <div className="mt-3">
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star "></span>
                                                                <span class="fa fa-star "></span>
                                                                <span class="fa fa-star"></span>
                                                                <span> (10%)</span>
                                                                <span style={{ float: "right" }}>0 Reviews</span>
                                                            </div>


                                                            <div className="mt-3">
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star "></span>
                                                                <span class="fa fa-star "></span>
                                                                <span class="fa fa-star "></span>
                                                                <span class="fa fa-star"></span>
                                                                <span> (%)</span>
                                                                <span style={{ float: "right" }}>0 Reviews</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
};

export default ProductDetail;