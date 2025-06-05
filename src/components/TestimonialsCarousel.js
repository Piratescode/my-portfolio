import React from 'react';
import './TestimonialsCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import pass from '../assets/pass.jpg'

const testimonials = [
  {
    school: 'GHS',
    text: `MiraDev Systems transformed our school's online presence with a custom portal that exceeded our expectations. Their attention to detail and commitment to quality made the process seamless.`,
    name: 'Sarah Johnson',
    title: 'Principal, Greenwood High School',
    image: pass, // Replace with actual image path
  },
  {
    school: 'XYZ University',
    text: `The computer-based testing system developed by MiraDev Systems was a game-changer for our university. It streamlined our exam process and provided instant results, which our students loved.`,
    name: 'Michael Smith',
    title: 'IT Director, XYZ University',
    image: pass,
  },
  {
    school: 'ABC Academy',
    text: `Working with MiraDev Systems was a fantastic experience. They delivered a user-friendly school portal that has greatly improved communication among our staff and students.`,
    name: 'Emily Davis',
    title: 'Administrator, ABC Academy',
    image: pass,
  },
  {
    school: 'St. Thaddues Science Academy',
    text: `Working with MiraDev Systems was a fantastic experience. They delivered a user-friendly school portal that has greatly improved communication among our staff and students.`,
    name: 'Emily Davis',
    title: 'Administrator, ABC Academy',
    image: pass,
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="testimonial-section">
      <div className='container'>
      <h2>Client Testimonials</h2>
      <p>Hear what our satisfied clients have to say about our innovative solutions and exceptional service.</p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-card">
            <h3>{testimonial.school}</h3>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-profile">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <strong>{testimonial.name}</strong>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
