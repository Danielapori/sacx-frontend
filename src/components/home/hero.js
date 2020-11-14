import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Keep records with ease and accuracy',
    content: 'Sacx is a record keeping app designed to help schools, businesses and organizations eliminate the burden of manual record keeping. Why add to the burdens of management? Automate your record keeping and have more time for other tasks.'
     },
  {
    key: '2',
    title: 'Work better together. Schedule meetings',
    content: 'Your records are in one place. Don’t sacrifice the accuracy of your records. Sacx’s automation eliminates human error and your records are more accurate.'
     },
  {
    key: '3',
    title: 'The best app to increase your productivity',
    content: 'Sacx is cheap. You can increase your bottomline. Save money on papers, office supplies and space.  ',
  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                  <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;