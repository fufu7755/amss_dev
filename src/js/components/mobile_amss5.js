import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import PCTopSection2 from './pc_top_section2'
import MobileMonitorSection from './mobile_monitor_section'
import PCTableSection from './pc_table_section'

export default class MobileAmss5 extends React.Component {
  render() {

    return (
      <div id="mobileAmss5" className="mobileMain amss5">
        <MobileHeader pageTitle={"AMSS-5"}></MobileHeader>
        <PCTopSection2></PCTopSection2>
        <div className="even">
          <MobileMonitorSection></MobileMonitorSection>
        </div>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
