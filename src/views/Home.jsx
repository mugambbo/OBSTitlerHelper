import React, { Component } from 'react'
import TitlesForm from '../components/TitlesForm'
import Navbar from '../components/Navbar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <main className="container" role="main" style={{margin: '5rem'}}><TitlesForm /></main>
            </React.Fragment>
        );
    }
}
 
export default Home;