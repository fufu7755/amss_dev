import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import PCTopSection2 from './pc_top_section2'
import MobileMonitorSection6 from './mobile_monitor_section6'
import PCTableSection from './pc_table_section'

export default class MobileAmss6 extends React.Component {
  render() {

    return (
      <div id="mobileAmss6" className="mobileMain tabletMain amss6">
        <MobileHeader pageTitle={"AMSS-6"}></MobileHeader>
        <PCTopSection2></PCTopSection2>
        
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
