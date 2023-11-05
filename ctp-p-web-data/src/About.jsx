import "./About.css";
import about1 from './assets/about1.jpg'
import about2 from './assets/about2.jpg'
import mem1 from './assets/mem1.jpg'
import mem2 from './assets/mem2.jpg'
import mem3 from './assets/mem3.jpg'


const About = () => {
    return (
        <body>
            <h1>About Us</h1>
                <div className="about">
                    <img src={about1}/>
                    <p1>
                        <div> <br /> We are a company or website. <br /> </div>
                        <div>that is committed to providing hotel parking <br /> </div>
                        <div>reservation services to our customers <br /> </div>
                        <div>We have a comprehensive service <br /> </div>
                        <div>Our customers' confidence and <br /> </div>
                        <div>comfort are of the utmost importance to us. <br />  </div>
                        <div>And we strive to make the parking booking <br /> </div>
                        <div>process as easy and quick as possible.</div>
                    </p1>
                </div>
            

            <div className="mission">
                <div className="textmiss">
                <h2>Mission and Vision</h2>
                    <p2>
                        <div>Our mission is to provide quality <br /> </div>
                        <div>parking and cover the needs of all our <br /> </div>
                        <div>customers. We strive to make booking <br /> </div>
                        <div>parking quick and easy. and believes <br /> </div>
                        <div>that parking should be an important part <br /> </div>
                        <div>of a safe and simple journey.<br /> </div>
                    </p2>
                </div>
                    <img src={about2}/>
            </div>


            <div className="member">
                <h3>Our Team</h3>
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