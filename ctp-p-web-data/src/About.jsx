import "./About.css";
import about1 from './assets/about1.jpg'
import about2 from './assets/about2.jpg'

const About = () => {
    return (
        <body>
            <h1>About Us</h1>
                <div className="about">
                    <img src={about1}/>
                    <p1>
                        We are a company or website. <br />
                        that is committed to providing hotel parking <br />
                        reservation services to our customers <br />
                        We have a comprehensive service <br />
                        Our customers' confidence and <br />
                        comfort are of the utmost importance to us. <br />
                        And we strive to make the parking booking <br />
                        process as easy and quick as possible.
                    </p1>
                </div>
            

            <div className="mission">
                <h2>Mission and Vision</h2>
                    <p2>
                        Our mission is to provide quality <br />
                        parking and cover the needs of all our <br />
                        customers. We strive to make booking <br />
                        parking quick and easy. and believes <br />
                        that parking should be an important part <br />
                        of a safe and simple journey.
                    </p2>
                    <img src={about2}/>
            </div>


            <div>
                <h3>Our Team</h3>
                <div className="memberpic">       
                    <div className="mem1">
                        <img src=""/>
                        <h3> name </h3>
                    </div> 
                    <div className="mem2">
                        <img src=""/>
                        <h4> name </h4>
                    </div> 
                    <div className="mem3">
                        <img src=""/>
                        <h5> name </h5>
                    </div>         

                </div>
            </div>
        </body>
    )
}
export default About;