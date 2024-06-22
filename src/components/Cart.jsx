import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart, incrementQuantity, decrementQuantity, setTotalAmount } from '../state/cartSlice'

function Cart() {
	let allTotal = 0;
	let dispatch = useDispatch();
	let data = useSelector((state) => {
		return state.cart.products
	})
	console.log(data);
	return (
		<>
			{/* <!-- Shopping CARD --> */}
			<div class="breadcrumbs">
				<div class="container">
					<div class="row">
						<div class="col">
							<p class="bread"><span><Link to={"/"}>Home</Link></span> / <span>Shopping Cart</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="colorlib-product">
				<div class="container">
					<div class="row row-pb-lg">
						<div class="col-md-12">
							<div class="product-name d-flex">
								<div class="one-forth text-left px-4">
									<span>Product Details</span>
								</div>
								<div class="one-eight text-center">
									<span>Price</span>
								</div>
								<div class="one-eight text-center">
									<span>Quantity</span>
								</div>
								<div class="one-eight text-center">
									<span>Total</span>
								</div>
								<div class="one-eight text-center px-4">
									<span>Remove</span>
								</div>
							</div>

							{
								data.map((product) => {
									allTotal += product.price * product.quantity
									return (

										<div class="product-cart d-flex">
											<div class="one-forth">
												<div class="product-img" style={{ backgroundImage: `url(${product.image})` }}>

												</div>
												<div class="display-tc">
													<h3>{product.title}</h3>
												</div>
											</div>
											<div class="one-eight text-center">
												<div class="display-tc">
													<span class="price">₹{product.price}</span>
												</div>
											</div>
											<div class="one-eight text-center">
												<div class="display-tc">
													<div class="d-flex">
														<button onClick={() => dispatch(decrementQuantity(product.id))} className="btn btn-secondary">-</button>

														<input type="text" name="quantity"
															class="form-control input-number text-center"
															value={product.quantity} min="1" max="100" />

														<button onClick={() => dispatch(incrementQuantity(product.id))} className="btn btn-secondary">+</button>
													</div>
												</div>
											</div>
											<div class="one-eight text-center">
												<div class="display-tc">
													<span class="price">{product.price * product.quantity}</span>
												</div>
											</div>
											<div class="one-eight text-center">
												<div class="display-tc">
													<button onClick={() => dispatch(removeToCart(product.id))} className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
												</div>
											</div>
										</div>
									)
								})
							}

						</div>
					</div>
					<div class="row row-pb-lg">
						<div class="col-md-12">
							<div class="total-wrap">
								<div class="row">
									<div class="col-sm-8">

									</div>
									<div class="col-sm-4 text-center">
										<div class="total">
											<div class="sub">
												<p><span>Subtotal:</span> <span>₹ {allTotal} /-</span></p>
												<p><span>Delivery:</span> <span>₹ 0.00 /-</span></p>
												<p><span>Discount:</span> <span>₹ 0.00 /-</span></p>
											</div>
											<div class="grand-total">
												<p><span><strong>Total:</strong></span> <span>₹ {allTotal} /-</span></p>
											</div>
											<Link onClick={() => dispatch(setTotalAmount(allTotal))} to={"/checkoutpage"}><button class="btn btn-primary btn-lg btn-block"
												type="submit">Continue to checkout</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div class="row">
							<div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
								<h2>Related Products</h2>
							</div>
						</div>
						<div class="row">
							<div class="col-md-3 col-lg-3 mb-4 text-center">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src={require("../assets/images/item-1.jpg")} class="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div class="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span class="price">$139.00</span>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-lg-3 mb-4 text-center">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src={require("../assets/images/item-2.jpg")} class="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div class="desc">
										<h2><a href="#">Women's Minam Meaghan</a></h2>
										<span class="price">$139.00</span>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-lg-3 mb-4 text-center">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src={require("../assets/images/item-3.jpg")} class="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div class="desc">
										<h2><a href="#">Men's Taja Commissioner</a></h2>
										<span class="price">$139.00</span>
									</div>
								</div>
							</div>
							<div class="col-md-3 col-lg-3 mb-4 text-center">
								<div class="product-entry border">
									<a href="#" class="prod-img">
										<img src={require("../assets/images/item-4.jpg")} class="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div class="desc">
										<h2><a href="#">Russ Men's Sneakers</a></h2>
										<span class="price">$139.00</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >

		</>
	)
}
export default Cart;