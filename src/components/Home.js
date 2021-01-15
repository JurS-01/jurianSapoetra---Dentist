import React from "react";
import "../App.css";

const Home = () => {
    let imageName = require('./pexels-evelina-zhu-5434017.jpg')
    return (
        <div className="home">
            <div>
                <h3 className="page-header">welcome to dentistaco</h3>
                <h4>our favorite cms-tool @Tandartsbedrijf B.V.T.</h4><br></br><br></br>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>
            </div>
            <div className="Home-img">
                <img src={imageName} alt="dentist" class="dentist-img" />
                <p>Photo by Evelina Zhu from Pexels.com</p>
            </div>
        </div>
    )
}

export default Home;
