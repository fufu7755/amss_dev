import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import PCTopSection2 from './pc_top_section2'
import MobileMonitorSection3 from './mobile_monitor_section3'
import PCTableSection from './pc_table_section'
import {Row, Col} from 'antd'

export default class MobileAmss3 extends React.Component {
  render() {
    return (
      <div id="mobileAmss3" className="mobileMain tabletMain amss3">
        <MobileHeader pageTitle={"AMSS-3"}></MobileHeader>
        <PCTopSection2></PCTopSection2>
        <div className="even">
          <MobileMonitorSection3></MobileMonitorSection3>
        </div>
        <div className="pageSection">
          <Row>
            <Col span={20} offset={2}>
              <img src="/src/images/amss3.png" alt=""/>
            </Col>
          </Row>
        </div>
        <div className="pageSection even">
          <Row>
            <Col span={20} offset={2}>
              <img src="/src/images/amss-5.png" alt=""/>
            </Col>
          </Row>
        </div>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
