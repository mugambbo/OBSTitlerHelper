import React, { Component } from 'react'
import clsx from 'clsx'

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const title = this.props.title;
        const isActive = this.props.active && this.props.active === title? true: false;
        return (              
            <li href="_blank" id={title} className ={clsx({"list-group-item list-group-item-action": true, active: isActive})} onClick={this.handleItemClick}>
                <span className="badge badge-info badge-pill">{this.props.index}</span>
                <span className="ml-3">{title}</span>
            </li>
        );
    }

    handleItemClick = (event) => {
        event.preventDefault();
        const title = event.target.id;
        console.log("Event ID: "+title);
        this.props.onItemClick(title, this.handleItemClick);
    }

    handleItemClickcallback(title){
        console.log("Callback saved: "+title);
    }
}
 
export default Title;