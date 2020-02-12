import React from 'react';
import Api from '../utils/Api';
import Config from '../Config';
import Card from '../components/city/Card';
import Home from '../components/core/Home';
import Gallery from '../components/city/Gallery';

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cities: []
        }
    }

    componentDidMount() {
         Api.getHome() 
        .then(cities => {
            this.setState({
                cities: cities
            })
        })  
            
        
    }
    render() {
        // const img = "http://localhost:3002"
        console.log(this.state)
        return (
        <div
            className='container-fluid'
            style={{
            fontFamily: 'Montserrat'
            }}>
              
              <Home 
              cities= {this.state.cities}
            //    i have to call the cities which is an property in the home(map) and in the setState in didmount (because the cities exist in the props in the instance of the home )
              />


                {/* <Home cities={this.state.cities}/>
                <p>{this.state.cities.map((index) => {
                    return (
                       
                        <div>
                            <p>{index.name}</p>
                            <p>{index.slug}</p>
                            <img src= {img+index.source} />



                         </div>
                    )
                })}</p> */}

        </div>
        );
    }
    }

    export default HomeContainer;

