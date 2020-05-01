import React, { Component } from 'react';
import TitlesList from './TitlesList';

class TitlesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            titles: []
        }
    }
    render() {
        return (  
                <div className="row">
                    <form className="col-sm-5">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1"><h5>Titles (each on a new line)</h5></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="20" onChange={this.handleChange} />
                        </div>
                    </form>

                    <div className="col-sm-7">
                        <h5>Pick a title (saves selected title in current_title.txt)</h5>
                        {this.state.titles.length > 0?<TitlesList titles={this.state.titles} />: <i>No titles entered</i>}
                    </div>                    
                </div>
        );
    }

    handleChange = (event) => {
        event.preventDefault();
        let titlesArr = [];
        const value = event.target.value;
        if (value){
            const titlesCSV = value;
            titlesArr = titlesCSV.split("\n").filter(title => title? true: false);
        }

        this.setState({
            titles: titlesArr
        })
        console.log("Change: "+value);
    }
}

export default TitlesForm;