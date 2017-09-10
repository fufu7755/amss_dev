import React from 'react'
import PCHeader from './pc_header'
import PCTopSection2 from './pc_top_section2'
import PCTableSection from './pc_table_section'
import PCMonitorSection from './pc_monitor_section'
import PCFooter from './pc_footer'
export default class PCAssm4 extends React.Component {

  render() {
    return (
      <div className="amss4 main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <PCTopSection2></PCTopSection2>
        <div className="even">
          <PCMonitorSection></PCMonitorSection>
        </div>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
