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
    //스크롤 진행 시, 자연스럽게 아래로 진행되게
    const contentElement = document.getElementById(selectedTab.toLowerCase()); //탭 이름을 소문자로 변환한 후, 해당하는 요소를 찾기
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

      {/* 포커싱되게 끔 */}
      <div id="reviews" style={{ height: 'auto', marginTop: '20px' }}>
        <MovieReviews />
      </div>

      <div className="videoSection" id="video" style={{ height: '1000px', marginTop: '20px' }}>
        <MovieVideo />
      </div>

      <div id="recommendations" style={{ height: 'auto', marginTop: '20px' }}>
        <MovieRecommendation/>
      </div>
    </>
  );
}

export default MovieTab;