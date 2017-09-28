import React from 'react'
import PCHeader from './pc_header'
import PCTopSection2 from './pc_top_section2'
import PCTableSection from './pc_table_section'
import PCMonitorSection5 from './pc_monitor_section5'
import PCFooter from './pc_footer'
export default class PCAssm5 extends React.Component {

  render() {
    return (
      <div className="amss5 main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <PCTopSection2></PCTopSection2>
        
        <PCFooter></PCFooter>
      </div>
    );
  };
}
