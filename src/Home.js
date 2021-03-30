import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://www.thewanderlustwithin.com/wp-content/uploads/2019/12/aegeeis-bedroom-1-1024x683.jpg"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://www.roadaffair.com/wp-content/uploads/2020/08/florida-airbnb-1024x683.jpg"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://www.thewanderlustwithin.com/wp-content/uploads/2019/12/aegeeis-bedroom-1-1024x683.jpg"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://i1.wp.com/thejoshuatreehouse.com/wp-content/uploads/2019/11/JTH-1-1024x683.jpg?resize=1024%2C683&ssl=1"
          title="3 Bedroom Flat in"
          description="Comfortable private places, with room for friends or family"
          price="$300/night"
        />
        <Card
          src="https://www.pragueairbnb.com/wp-content/uploads/2020/03/Vodickova-35-19-1024x683.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$350/night"
        />
        <Card
          src="https://www.yoreoyster.com/wp-content/uploads/2020/07/AirbnbEdinburgh_001.jfif_-12-1024x683.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenties and a fabolous shopping complex nearby"
          price="$250/night"
        />
      </div>
    </div>
  );
}

export default Home;
