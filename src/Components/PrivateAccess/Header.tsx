import React from 'react';


export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="PrivateAccessHeader">
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}