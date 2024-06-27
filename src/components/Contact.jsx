import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <div class="breadcrumbs">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <p class="bread"><span><Link to={"/"}>Home</Link></span> / <span>Contact</span></p>
                        </div>
                    </div>
                </div>
            </div>


            <div id="colorlib-contact">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3>Contact Information</h3>
                            <div class="row contact-info-wrap">
                                <div class="col-md-3">
                                    <p><span><i class="icon-location"></i></span> 198 West 21th Street, <br /> Suite 721 New York NY 10016</p>
                                </div>
                                <div class="col-md-3">
                                    <p><span><i class="icon-phone3"></i></span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                </div>
                                <div class="col-md-3">
                                    <p><span><i class="icon-paperplane"></i></span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                </div>
                                <div class="col-md-3">
                                    <p><span><i class="icon-globe"></i></span> <a href="#">yoursite.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-wrap">
                                <h3>Get In Touch</h3>
                                <form action="#" class="contact-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="fname">First Name</label>
                                                <input type="text" id="fname" class="form-control" placeholder="Your firstname" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="lname">Last Name</label>
                                                <input type="text" id="lname" class="form-control" placeholder="Your lastname" />
                                            </div>
                                        </div>
                                        <div class="w-100"></div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="email">Email</label>
                                                <input type="text" id="email" class="form-control" placeholder="Your email address" />
                                            </div>
                                        </div>
                                        <div class="w-100"></div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="subject">Subject</label>
                                                <input type="text" id="subject" class="form-control" placeholder="Your subject of this message" />
                                            </div>
                                        </div>
                                        <div class="w-100"></div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label for="message">Message</label>
                                                <textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Say something about us"></textarea>
                                            </div>
                                        </div>
                                        <div class="w-100"></div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <button class="btn btn-secondary" >Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div id="map" class="colorlib-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6153718042865!2d74.23991857418558!3d16.69611988407791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101949f75511f%3A0xe90496fff0aae57e!2sRed%20Chief%20Store!5e0!3m2!1sen!2sin!4v1716288853496!5m2!1sen!2sin" width="600" height="710" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;