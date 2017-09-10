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
                Copyright@Bridge5 Asia Pte Ltd 2015.Website by iFoundries.
            </div>
        );
    };
}
