function Footer() {
	return (
		<>
			<div class="colorlib-partner">
				<div class="container">
					<div class="row">
						<div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
							<h2>Trusted Partners</h2>
						</div>
					</div>
					<div class="row">
						<div class="col partner-col text-center">
							<img src={require("../assets/images/brand-1.jpg")} class="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div class="col partner-col text-center">
							<img src={require("../assets/images/brand-2.jpg")} class="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div class="col partner-col text-center">
							<img src={require("../assets/images/brand-3.jpg")} class="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div class="col partner-col text-center">
							<img src={require("../assets/images/brand-4.jpg")} class="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
						<div class="col partner-col text-center">
							<img src={require("../assets/images/brand-5.jpg")} class="img-fluid" alt="Free html4 bootstrap 4 template" />
						</div>
					</div>
				</div>
			</div>
			<footer id="colorlib-footer" role="contentinfo">
				<div class="container">
					<div class="row row-pb-md">
						<div class="col footer-col colorlib-widget">
							<h4>About Footwear</h4>
							<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
							<p>
								<ul class="colorlib-social-icons">
									<li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
									<li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
								</ul>
							</p>
						</div>
						<div class="col footer-col colorlib-widget">
							<h4>Customer Care</h4>
							<p>
								<ul class="colorlib-footer-links">
									<li><a href="#">Contact</a></li>
									<li><a href="#">Returns/Exchange</a></li>
									<li><a href="#">Gift Voucher</a></li>
									<li><a href="#">Wishlist</a></li>
									<li><a href="#">Special</a></li>
									<li><a href="#">Customer Services</a></li>
									<li><a href="#">Site maps</a></li>
								</ul>
							</p>
						</div>
						<div class="col footer-col colorlib-widget">
							<h4>Information</h4>
							<p>
								<ul class="colorlib-footer-links">
									<li><a href="#">About us</a></li>
									<li><a href="#">Delivery Information</a></li>
									<li><a href="#">Privacy Policy</a></li>
									<li><a href="#">Support</a></li>
									<li><a href="#">Order Tracking</a></li>
								</ul>
							</p>
						</div>

						<div class="col footer-col">
							<h4>News</h4>
							<ul class="colorlib-footer-links">
								<li><a href="blog.html">Blog</a></li>
								<li><a href="#">Press</a></li>
								<li><a href="#">Exhibitions</a></li>
							</ul>
						</div>

						<div class="col footer-col">
							<h4>Contact Information</h4>
							<ul class="colorlib-footer-links">
								<li>291 South 21th Street, <br /> Suite 721 New York NY 10016</li>
								<li><a href="tel://1234567920">+ 1235 2355 98</a></li>
								<li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
								<li><a href="#">yoursite.com</a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>


		</>
	)
}
export default Footer;