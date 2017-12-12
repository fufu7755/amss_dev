import React from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import ContactForm from './mobile_contactForm'

export default class MobileContact extends React.Component {
  render() {

    return (
      <div id="mobileContact" className="mobileMain tabletMain">
        <MobileHeader pageTitle={"联系我们"}></MobileHeader>
        
        <div className="contactForm">
          <ContactForm></ContactForm>
        </div>

        <div className="qrchat-img">
          <img src="/src/images/qrchat.png" alt=""/>
        </div>

        <div className="mobileContactInfo">

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