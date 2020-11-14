import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'High Performance',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Flat Design',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Simplified Workflow',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>Deestories is the founding father of the Sacx record keeping app under the leadership of Mr. Daniel Apori JR.</p>
        </div>
        <div className="contentHolder">
          <p>Sacx is a record keeping app designed to help schools, businesses and organizations eliminate the burden of 
            manual record keeping. Why add to the burdens of management? Automate your record keeping and have more time 
            for other tasks. Sacx is cheap. You can increase your bottomline. Save money on papers, office supplies and 
            space. Your records are in one place. Don’t sacrifice the accuracy of your records. Sacx’s automation eliminates 
            human error and your records are more accurate.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                 
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;