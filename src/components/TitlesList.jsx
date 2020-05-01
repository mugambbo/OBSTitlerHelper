import React, { Component } from 'react'
import Title from './Title'

class TitlesList extends Component {
    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        this.state = {  
            active: "",
            titleSaved: ""
        }
    }

    render() { 
        // const titles = props.titles;
        return (  
            <React.Fragment>
                {this.state.titleSaved?
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{this.state.titleSaved}</strong> Saved!
                </div>:<div className="alert alert-info alert-dismissible fade show" role="alert">
                    <span>No title saved yet!</span>
                </div>}
                <ul className="list-group">
                    {this.props.titles.map((title, index) => <Title key={index} title = {title} active = {this.state.active} onItemClick={this.onItemClick} index={index} />)}
                </ul>            
            </React.Fragment>
        );
    }

    onItemClick(title, cb){
        this.setState({
            active: title
        })
        this.download(title, cb);
    }

    download(title, cb) {
        console.log("About to save: "+title);
        fetch("http://127.0.0.1:3000", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: title.trim()})
          })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
        })
        .then(resp => {
            this.setState({
                titleSaved: title
            });
        })
        .catch(error => alert(error))
        // var blob = new Blob([title.trim()], {type: "text/plain;charset=utf-8"});
        // FileSaver.saveAs(blob, "obs_title.txt");
    }    
}
 
export default TitlesList;