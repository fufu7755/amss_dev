import React from 'react';

export default class PCFooter extends React.Component {
    constructor(){
        super();
        this.state ={
            current: 'top'
        }
    }
    render() {
        return (
            <div className="footer">
                关于晤桥亚洲 Copyright@AMSS ASIA PTE LTD.
            </div>
        );
    };
}
