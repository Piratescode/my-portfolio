import React from 'react';
import './SchoolPortalSection.css';
import portalImage from '../assets/studentportal.jpg';

const SchoolPortalSection = () => {
  return (
    <div className='portal'>
        
            <section className="school-portal">
                <div className='container'>
                    <div className="left-content">
                        <p className="subheading">OUR EXPERTISE</p>
                        <h2 className="heading">Dynamic School Portals</h2>
                    </div>
                    <div className="right-content">
                        <p className="description">
                            MiraDev Systems specializes in creating dynamic school portals tailored to meet the unique needs of educational institutions. Our portals enhance communication, streamline administrative tasks, and provide a centralized platform for students, teachers, and parents. We ensure a user-friendly experience with robust features.
                        </p>
                        <button className="learn-more">Learn More</button>
                    </div>
               </div>  
            </section>
       
            <section className='portal-image'>
                <img src={portalImage} alt="Student Portal Tablet Mockup" />
            </section>
        
    </div>
  );
};

export default SchoolPortalSection;
