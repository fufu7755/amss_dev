import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import PCTopSection from './pc_top_section'
import MobileMonitorSection5 from './mobile_monitor_section5'
import PCTableSection from './pc_table_section'

export default class MobileAmss5 extends React.Component {
  render() {

    return (
      <div id="mobileAmss5" className="mobileMain tabletMain amss5">
        <MobileHeader pageTitle={"AMSS-5"}></MobileHeader>
        <PCTopSection></PCTopSection>
        <MobileMonitorSection5></MobileMonitorSection5>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
