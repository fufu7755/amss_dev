import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import PCTopSection2 from './pc_top_section2'
import MobileMonitorSection from './mobile_monitor_section'
import PCTableSection from './pc_table_section'

export default class MobileAmss3 extends React.Component {
  render() {

    return (
      <div id="mobileAmss3" className="mobileMain amss3">
        <MobileHeader pageTitle={"AMSS-3"}></MobileHeader>
        <PCTopSection2></PCTopSection2>
        <div className="even">
          <MobileMonitorSection></MobileMonitorSection>
        </div>
        <div className="pageSection">
          <img src="/src/images/amss2-3.png" alt=""/>
        </div>
        <div className="pageSection even">
            <img src="/src/images/amss-5.png" alt=""/>
        </div>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}