import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import PCTopSection2 from './pc_top_section2'
import MobileMonitorSection2 from './mobile_monitor_section2'
import PCTableSection from './pc_table_section'
import {Row, Col} from 'antd'

export default class TabletAmss2 extends React.Component {
  render() {

    return (
      <div id="mobileAmss2" className="mobileMain tabletMain amss2">
        <MobileHeader pageTitle={"AMSS-2"}></MobileHeader>
        <PCTopSection2></PCTopSection2>
        <div className="even">
          <MobileMonitorSection2></MobileMonitorSection2>
        </div>
        <div className="pageSection">
          <Row>
            <Col span={20} offset={2}>
              <img src="/src/images/amss2-3.png" alt=""/>
            </Col>
          </Row>
        </div>
        <div className="pageSection even">
          <Row>
            <Col span={20} offset="2">
              <img src="/src/images/amss2-4.png" alt=""/>
            </Col>
          </Row>
        </div>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
