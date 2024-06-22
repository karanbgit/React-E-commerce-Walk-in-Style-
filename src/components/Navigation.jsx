import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'


function Navigation() {
	let count = useSelector((state) => {
		return state.cart.products
	})

	return (
		<>
			<nav class="colorlib-nav" role="navigation">
				<div class="container">
					<div class="top-menu">
						<div class="row">
							<div class="col-sm-7 col-md-9">
								<div id="colorlib-logo">
									<Link to={"/"}>
										<img style={{ width: "280px", height:"120px" }} src={require("../assets/images/logo-new.png")} />
									</Link>
								</div>
							</div>
							
						</div>
						<div class="row">
							<div class="col-sm-12 text-left menu-1">
								<ul className="nav">
									<li class="nav-item"><Link className="nav-link" to={"/"}>Home</Link></li>
									{/* <li><Link to={"/men"}>Men</Link> </li> */}
									<li className="nav-item"><Link className="nav-link" to={"/allproducts"}>All Products</Link></li>
									<li className="nav-item"><Link className="nav-link" to={"/about"}>About</Link></li>
									<li className="nav-item"><Link className="nav-link" to={"/contact"}>Contact</Link></li>
									{/* <li className="nav-item"><Link className="nav-link" to={"/checkoutpage"}>CheckOutPage</Link></li> */}
									{/* <li className="nav-item"><Link className="nav-link" to={"/productdetail"}>Product Details</Link></li> */}
									<li className="nav-item"><Link className="nav-link" to={"/login"}>Admin Login</Link></li>
									<li class="cart nav-item"><Link className="nav-link" to={"/cart"} ><i class="fa-solid fa-cart-shopping"></i> Cart[{count.length}]</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="sale">
					<div class="container">
						<div class="row " >
							<div class="col-sm-8 offset-sm-2 text-center" >
								<div class="owl-carousel2">
									<div class="item">
										<h3 style={{ color: "white" }}>25% off (Almost) Everything! Use Code: Summer Sale</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}
export default Navigation;