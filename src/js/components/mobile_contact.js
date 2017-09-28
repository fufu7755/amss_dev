import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import ContactForm from './mobile_contactForm'
export default class MobileContact extends React.Component {
  render() {

    return (
      <div id="mobileContact" className="mobileMain">
        <MobileHeader pageTitle={"联系我们"}></MobileHeader>
        <div className="mobileContactContent">
          <h2>晤桥亚洲</h2>
          <p>晤桥亚洲是地产界兼具高度和深度的资产管理咨询团队。晤桥亚洲团队结合资本与地产双视角，为企业搭建和优化与国际接轨的资产管理、商业地产投资、开发和运营管理体系，并开发了国际先进的AMSS资产管理软件。晤桥亚洲长期为万科地产、上海地产、宝龙地产、阳光新业、华远地产、高和资本等国内多个地产、金融企业梳理商业地产投资战略，搭建资产管理和经营管理体系，并对一些大型综合体项目进行回报优化操作与指导。晤桥亚洲的客户还包括华平投资（美国）、泰康人寿、华新丽华（台湾）、大中地产等国内外知名地产、金融企业。</p>

        </div>
        <div className="contactForm">
          <ContactForm></ContactForm>
        </div>

        <div className="qrchat-img">
          <img src="/src/images/qrchat.png" alt=""/>
        </div>
        
        <div className="mobileContactInfo">
          <h3><a target="_blank" href="http://www.bridge5asia.com">www.bridge5asia.com</a></h3>
          <p>One Fullerton, 1 Fullerton Road,</p>
          <p>#02-01,Singapore 049213</p>

          <h4>电话</h4>
          <p>(65) 6468 3619</p>
          <p>(65) 9297 0850 </p>
          <p>(86) 136 7006 7157</p>
          <h4>传真</h4>
          <p>(65) 6408 3801 </p>
          <h4>邮箱</h4>
          <p>amss@amssasia.com.cn </p>
        </div>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}
