import React from 'react'
import PCHeader from './pc_header'
import PCTopSection from './pc_top_section'
import PCTableSection from './pc_table_section'
import PCMonitorSection6 from './pc_monitor_section6'
import PCFooter from './pc_footer'
export default class PCAssm6 extends React.Component {

  render() {
    return (
      <div className="amss6 main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <PCTopSection></PCTopSection>
        <PCMonitorSection6></PCMonitorSection6>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
