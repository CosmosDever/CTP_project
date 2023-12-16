import "./About.css";
import about1 from './assets/about1.jpg'
import about2 from './assets/about2.jpg'
import mem1 from './assets/mem1.jpg'
import mem2 from './assets/mem2.jpg'
import mem3 from './assets/mem3.jpg'
import carparking1 from './assets/carparking1.jpg'
import carparking2 from './assets/carparking2.jpg'
import carparking3 from './assets/carparking3.jpg'
import car1 from './assets/car1.png'


const About = () => {
    return (
        <body>
            {/* <p>About Us</p> */}
                <div className="about">
                    <div className="textabout">
                        <p>About Us</p>
                        {/* <img src={about1}/> */}
                        <p1>
                            <div>We are a company or website<br /> </div>
                            <div>that is committed to providing hotel parking <br /> </div>
                            <div>reservation services to our customers. <br /> </div>
                            <div>We have a comprehensive service. <br /> </div>
                            <div>Our customers' confidence and comfort<br /> </div>
                            <div>are of the utmost importance to us. <br />  </div>
                            <div>And we strive to make the parking booking process<br /> </div>
                            <div>as easy and quick as possible.</div>
                        </p1>
                    </div>
                    <div className="all-carparking"> 
                        <img src={carparking1}/>
                            <div className="carparking2">
                                <img src={carparking2}/>
                            </div>
                        <img src={carparking3}/>
                    </div>
                </div>

            <div className="mission">
                <img src={car1}/>
                <div className="textmiss">
                <p8>Mission and Vision</p8>
                    <p2>
                        <div>Our mission is to provide quality parking <br /> </div>
                        <div>and cover the needs of all our customers.<br /> </div>
                        <div>We strive to make booking parking<br /> </div>
                        <div>quick and easy. And believes that<br /> </div>
                        <div>parking should be an important part <br /> </div>
                        <div>of a safe and simple journey.<br /> </div>
                    </p2>
                </div>
            </div>


            <div className="member">
                <p9>Our Team</p9>
                <div className="memberpic">       
                    <div className="mem1">
                        <img src={mem1}/>
                        {/* <p3> name </p3> */}
                    </div> 
                    <div className="mem2">
                        <img src={mem2}/>
                        {/* <p4> name </p4> */}
                    </div> 
                    <div className="mem3">
                        <img src={mem3}/>
                        {/* <p5> name </p5> */}
                    </div>         

                </div>
            </div>
        </body>
    )
}
export default About;

