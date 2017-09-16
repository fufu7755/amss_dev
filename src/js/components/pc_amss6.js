import React from 'react'
import PCHeader from './pc_header'
import PCTopSection2 from './pc_top_section2'
import PCTableSection from './pc_table_section'
import PCMonitorSection6 from './pc_monitor_section6'
import PCFooter from './pc_footer'
export default class PCAssm6 extends React.Component {

  render() {
    return (
      <div className="amss6 main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <PCTopSection2></PCTopSection2>
        <div className="even">
          <PCMonitorSection6></PCMonitorSection6>
        </div>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
