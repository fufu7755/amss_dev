import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import PCTopSection from './pc_top_section'
import MobileMonitorSection4 from './mobile_monitor_section4'
import PCTableSection from './pc_table_section'

export default class MobileAmss4 extends React.Component {
  render() {

    return (
      <div id="mobileAmss4" className="mobileMain tabletMain amss4">
        <MobileHeader pageTitle={"AMSS-4"}></MobileHeader>
        <PCTopSection></PCTopSection>
        <div className="even">
          <MobileMonitorSection4></MobileMonitorSection4>
        </div>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
