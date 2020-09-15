import React, { Component, MouseEvent } from 'react';
import './TabsBar.css';

export class TabsBar extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            id: 0,
            src: 0,
        };
    }

    /*handleClick(event: MouseEvent) {
        event.preventDefault();
        //alert(event.currentTarget.id); // alerts BUTTON
        let id = event.currentTarget.id;

    }*/

    render() {
        return(
            <>
            <button className= "NavButton" onClick={() => this.setState({id: "1", src:"hei"})}>1</button>
            <button id = "Art2" className="NavButton" >2</button>
            <button id = "Art3" className="NavButton" >3</button>
            <button id = "Art4" className="NavButton" >4</button>
            <button id = "Art5" className="NavButton" >4</button>
            {this.props.children}
            </>
        );
    }
}

