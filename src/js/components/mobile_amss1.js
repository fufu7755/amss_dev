import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import PCTopSection from './pc_top_section'
import MobileMonitorSection from './mobile_monitor_section'
import PCTableSection from './pc_table_section'

export default class MobileAmss1 extends React.Component {
  render() {

    return (
      <div id="mobileAmss1" className="mobileMain amss1">
        <MobileHeader pageTitle={"AMSS-1"}></MobileHeader>
        <PCTopSection></PCTopSection>
        <PCTableSection></PCTableSection>
        <MobileMonitorSection></MobileMonitorSection>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
