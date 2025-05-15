import React from "react";
import "./Team.css";
import teamPhoto from "../assets/team-photo.jpg"; // Change name to your image file

const Team = () => {
  return (
    <section className="team">
      <div className="team-image">
        <img src={teamPhoto} alt="Team" />
      </div>
      <div className="team-content">
        <h2>Meet Our Team</h2>
        <p>
          At MiraDev Systems, we are passionate about enhancing educational
          experiences through technology. Our skilled team combines expertise
          in web development with a commitment to innovation and user-centric
          design.
        </p>
        <div className="team-stats">
          <div><strong>10 years</strong><br />Years of Experience</div>
          <div><strong>5 projects</strong><br />Successful Projects Delivered</div>
          <div><strong>3 values</strong><br />Core Values We Uphold</div>
          <div><strong>3 team members</strong><br />Dedicated Team Members</div>
        </div>
      </div>
    </section>
  );
};

export default Team;
