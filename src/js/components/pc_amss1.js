import React from 'react'
import PCHeader from './pc_header'
import PCTableSection from './pc_table_section'
import PCMonitorSection from './pc_monitor_section'
import PCTopSection from './pc_top_section'
import PCFooter from './pc_footer'
export default class PCAmss1 extends React.Component {

  render() {
    return (
      <div className="amss1 main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <PCTopSection></PCTopSection>
        <PCTableSection></PCTableSection>
        <PCMonitorSection></PCMonitorSection>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
