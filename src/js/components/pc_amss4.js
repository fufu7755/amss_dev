import React from 'react'
import PCHeader from './pc_header'
import PCTopSection from './pc_top_section'
import PCTableSection from './pc_table_section'
import PCMonitorSection4 from './pc_monitor_section4'
import PCFooter from './pc_footer'
export default class PCAssm4 extends React.Component {
  render() {
    return (
      <div className="amss4 main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <PCTopSection></PCTopSection>
        <div className="even">
          <PCMonitorSection4></PCMonitorSection4>
        </div>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
