import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Row, Col} from 'antd'

export default class PCTableSection extends React.Component {

  render() {
    return (
      <div className="tableSection">
        <div className="container">
          <Row>
            <Col className="tableTop" span={4}>
              <h4>AMSS-1</h4>
              <p>投资回报测算+估值</p>
            </Col>
            <Col className="tableTop" span={4}>
              <h4>AMSS-2</h4>
              <p>招商管理+回报再测算</p>
            </Col>
            <Col className="tableTop" span={4}>
              <h4>AMSS-3</h4>
              <p>经营预算管理+回报再测算</p>
            </Col>
            <Col className="tableTop" span={4}>
              <h4>AMSS-4</h4>
              <p>投资审批+风险控制</p>
            </Col>
            <Col className="tableTop" span={4}>
              <h4>AMSS-5</h4>
              <p></p>
            </Col>
            <Col className="tableTop" span={4}>
              <h4>AMSS-6</h4>
              <p></p>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <img src="/src/images/shop.png" alt=""/>
              <p>购物中心</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/shop.png" alt=""/>
              <p>购物中心</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/shop.png" alt=""/>
              <p>购物中心</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/shop.png" alt=""/>
              <p>购物中心</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/shop.png" alt=""/>
              <p>购物中心</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/shop.png" alt=""/>
              <p>购物中心</p>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <img src="/src/images/building.png" alt=""/>
              <p>写字楼</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/building.png" alt=""/>
              <p>写字楼</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/building.png" alt=""/>
              <p>写字楼</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/building.png" alt=""/>
              <p>写字楼</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/building.png" alt=""/>
              <p>写字楼</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/building.png" alt=""/>
              <p>写字楼</p>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <img src="/src/images/hotel.png" alt=""/>
              <p>酒店公寓</p>
            </Col>
            <Col span={4}>
            </Col>
            <Col span={4}>
            </Col>
            <Col span={4}>
              <img src="/src/images/hotel.png" alt=""/>
              <p>酒店公寓</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/hotel.png" alt=""/>
              <p>酒店公寓</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/hotel.png" alt=""/>
              <p>酒店公寓</p>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <img src="/src/images/cash.png" alt=""/>
              <p>物业销售</p>
            </Col>
            <Col span={4}>
            </Col>
            <Col span={4}>
            </Col>
            <Col span={4}>
              <img src="/src/images/cash.png" alt=""/>
              <p>物业销售</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/cash.png" alt=""/>
              <p>物业销售</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/cash.png" alt=""/>
              <p>物业销售</p>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <img src="/src/images/all.png" alt=""/>
              <p>综合体</p>
            </Col>
            <Col span={4}>
            </Col>
            <Col span={4}>
            </Col>
            <Col span={4}>
            </Col>
            <Col span={4}>
              <img src="/src/images/all.png" alt=""/>
              <p>综合体</p>
            </Col>
            <Col span={4}>
              <img src="/src/images/all.png" alt=""/>
              <p>综合体</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
}
