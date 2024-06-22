import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <div id="page">
                <div class="breadcrumbs">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <p class="bread"><span><Link to={"/"}>Home</Link></span> / <span>About</span></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="colorlib-about">
                    <div class="container">
                        <div class="row row-pb-lg">
                            <div class="col-sm-6 mb-3">
                                <div class="video colorlib-video" style={{ backgroundImage: "url(images/about.jpg)" }}>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eAVBUF5C9pg?si=XNVxbvPOQoeh9cbt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    {/* <div class="overlay"></div> */}
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="about-wrap">
                                    <h2>Footwear the leading eCommerce Store around the Globe</h2>
                                    <p>Footwear refers to garments worn on the feet, which typically serve the purpose of protection against adversities of the environment such as wear from rough ground; stability on slippery ground; and temperature.Cultures have different customs regarding footwear. These include not using any in some situations, usually bearing a symbolic meaning. This can however also be imposed on specific individuals to place them at a practical disadvantage against shod people, if they are excluded from having footwear available or are prohibited from using any. This usually takes place in situations of captivity, such as imprisonment or slavery, where the groups are among other things distinctly divided by whether or not footwear is being worn.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default About;