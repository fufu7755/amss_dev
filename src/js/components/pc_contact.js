import React from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
export default class PCContact extends React.Component {

  render() {
    return (
      <div className="contact main">
        <PCHeader pageTitle={"资产全周期回报管控体系"}></PCHeader>
        <div className="pageSection">
          <div className="container">
              <h2>晤桥亚洲</h2>
              <p>晤桥亚洲是地产界兼具高度和深度的资产管理咨询团队。晤桥亚洲团队结合资本与地产双视角，为企业搭建和优化与国际接轨的资产管理、商业地产投资、开发和运营管理体系，并开发了国际先进的AMSS资产管理软件。晤桥亚洲长期为万科地产、上海地产、宝龙地产、阳光新业、华远地产、高和资本国内多个地产、金融企业梳理商业地产投资战略，搭建资产管理和经营管理体系，并对一些大型综合体项目进行回报优化操作与指导。晤桥亚洲的客户还包括华平投资（美国）、泰康人寿、华新丽华（台湾）、大中地产等国内外知名地产、金融企业。</p>
              <div className="contactForm">
                <div className="row">
                  <div className="col-8">
                    <h4>www.bridge5asia.com</h4>
                    <p>One Fullerton, 1 Fullerton Road,</p>
                    <p>#02-01,Singapore 049213</p>
                    <table>
                      <tbody>
                        <tr>
                          <td>电话</td>
                          <td>
                            <p>(65) 6468 3619</p>
                            <p>(65) 9297 0850 </p>
                            <p>(86) 136 7006 7157</p>
                          </td>
                        </tr>
                        <tr>
                          <td>传真</td>
                          <td>
                            <p>(65) 6408 3801 </p>
                          </td>
                        </tr>
                        <tr>
                          <td>邮箱</td>
                          <td>
                            <p>amss@amssasia.com.cn </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-16">
                    <form action="#">
                      <div className="row">
                        <div className="col-12">
                          <input className="form-control" type="text" placeholder="姓名" />
                        </div>
                        <div className="col-12">
                          <input className="form-control" type="email" placeholder="邮件" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <input className="form-control" type="text" placeholder="电话" />
                        </div>
                        <div className="col-12">
                          <input className="form-control" type="text" placeholder="标题" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-24">
                          <textarea className="form-control" rows="5" placeholder="信息"></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-24">
                          <button>发送信息</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          </div>

        </div>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
