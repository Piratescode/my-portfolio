import React from 'react';
import './NewsSection.css';
import news1 from '../assets/news1.jpg';
import news2 from '../assets/new2.jpg'
import news3 from '../assets/news3.jpg'

const newsData = [
  {
    category: 'Web Development',
    title: 'Revolutionizing School Portals with Modern Web Development',
    description: 'Modern web development techniques are transforming school portals, making them more user-friendly and efficient.',
    image: news1,
  },
  {
    category: 'Educational Technology',
    title: 'Building Secure and Reliable Computer-Based Test Systems',
    description: 'Creating secure and reliable computer-based test systems requires a robust approach to web development.',
    image: news2,
  },
  {
    category: 'Web Development',
    title: 'The Importance of Choosing the Right Tech Stack for Your Web Development Project',
    description: 'Selecting the appropriate technologies is crucial for the success of any web development project.',
    image: news3,
  },
];

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="container">
        <div className="news-header">
          <div>
            <h2>Latest Insights</h2>
            <p>Explore our recent articles on web development.</p>
          </div>
          <div>
            <a href="/portfolio" className="portfolio-btn">View Portfolio</a>
          </div>
        </div>

      <div className="news-grid">
        {newsData.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="news-content">
              <p className="news-category">{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#">Read More &rsaquo;</a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
