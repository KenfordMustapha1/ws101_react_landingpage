import "./styles.css";
import aboutimg from './about.jpg';

function About() {
    return(
        <div>
            <div id="about" className="body1">
                <img src={aboutimg} alt="about"/>
                <div className="rectangle1">
                    <h1 className="h">Online Presence</h1>
                    <p className="p">Web development enables businesses and individuals to establish a professional online presence, which is crucial in todays digital <br/>world. A well-designed website helps to <br/>showcase products, services, or personal portfolios to a global audience, making it <br/>easier to connect with potential customers <br/>or clients.</p>
                </div>
                <div className="rectangle2">
                    <h1 className="h">Accessibility</h1>
                    <p className="p">Websites provide 24/7 access to information <br/> and services. This means users can access <br/>your content at any time, from anywhere in <br/>the world, without being restricted by physical location or business hours. This constant availability can significantly expand your <br/>reach and influence.</p>

                </div>
                <div className="rectangle3">
                    <h1 className="h">Branding</h1>
                    <p className="p">A professionally developed website helps <br/>strengthen your brand’s identity. It reflects <br/>your brand’s values, style, and message, <br/>creating a consistent and memorable <br/>experience for visitors. This can build trust <br/>brand enhance your reputation in the market.</p>
                </div>
                <div className="rectangle4">
                    <h1 className="h">Marketing</h1>
                    <p className="p">Websites are central to digital marketing strategies. They enable businesses to <br/>implement various online marketing <br/>techniques such as search engine <br/>optimization (SEO), content marketing, <br/>and pay-per-click advertising. <br/>A well-optimized site can attract more <br/> visitors and generate leads.</p>
                </div>
                <div className="rectangle5">
                    <h1 className="h">Customer Engagement</h1>
                    <p className="p">Effective web development allows for interactive elements like contact forms, live chat, and feedback systems. These features help engage visitors directly, addressing their questions or concerns in real time, and fostering a better relationship with your audience.</p>
                </div>
                <div className="rectangle6">
                    <h1 className="h">Sales and Revenue</h1>
                    <p className="p">For e-commerce sites, web development is <br/>key to creating a seamless shopping <br/>experience. A well-designed online store <br/>can facilitate transactions, showcase <br/>products effectively, and integrate payment systems, helping to boost sales and <br/>increase revenue opportunities.</p>
                </div>

                <footer class="footer">
                    <p>&copy; 2024 Ken Ford M. Mustapha. All rights reserved.</p>
                </footer>
            
            </div>
        </div>
    )
}

export default About;