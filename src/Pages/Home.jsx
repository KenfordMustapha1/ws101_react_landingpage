import "./styles.css";
import tkh2 from './tkh2.jpg';

function Home() {
    return (
        <div>
            <div id="home" classNameName="body11">
                <div> 
                    <p className="hero-text">The Importance of <span className="highlight">Web Development</span></p>
                    <p className="hero-subtext">Discover How Web Development Can Drive Growth, Enhance User Experience, and Set You Apart in the Digital World.</p>
                    <button> Learn More..</button>
                    <div>
                        <div className="circle1"></div>
                        <div className="circle"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                        <div className="rectangle">  
                            <img src={tkh2} alt="tlj"/>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}



export default Home;