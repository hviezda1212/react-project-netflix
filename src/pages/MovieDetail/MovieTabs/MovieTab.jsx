import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import MovieVideo from '../MovieVideo/MovieVideo';
import MovieReviews from '../MovieReviews/MovieReviews';
import '../MovieTabs/MovieTab.style.css';
import MovieRecommendation from '../MovieRecommendation/MovieRecommendation';

function MovieTab() {
  const [activeTab, setActiveTab] = useState('Reviews');

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);

    const contentElement = document.getElementById(selectedTab.toLowerCase());
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Nav className='TabContainer' fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            active={activeTab === 'Reviews'}
            onClick={() => handleTabSelect('Reviews')}
            style={{ color: 'Red' }}
          >
            Reviews
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            active={activeTab === 'Video'}
            onClick={() => handleTabSelect('Video')}
            style={{ color: 'Red' }}
          >
            Video
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            active={activeTab === 'Recommendations'}
            onClick={() => handleTabSelect('Recommendations')}
            style={{ color: 'Red' }}
          >
            Recommendations
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div id="reviews" style={{ height: 'auto', marginTop: '20px' }}>
        <MovieReviews />
      </div>

      <div className="videoSection" id="video" style={{ height: 'auto', marginTop: '20px' }}>
        <MovieVideo />
      </div>

      <div id="recommendations" style={{ height: 'auto', marginTop: '20px' }}>
        <MovieRecommendation/>
      </div>
    </>
  );
}

export default MovieTab;