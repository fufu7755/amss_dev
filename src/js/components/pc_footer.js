import React from 'react';

export default class PCFooter extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top'
        }
    }
    render() {
        return (
            <div className="footer">
                <p>
                    <a href="http://www.bridge5asia.com" target="_blank">关于晤桥亚洲</a>
                </p>
                <p className="copyright">
                    Copyright@AMSS ASIA PTE LTD.
                </p>
                
            </div>
        );
    };
}