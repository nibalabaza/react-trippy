import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`

`;


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            slug: this.props.slug,
            source: this.props.source

        }
        
    }
    render () {
        return (
            <Container className="col-md-3 col-6">
                <Link to = {`/hotels/?city=${this.state.slug}`}>
                <div>
                   <p>{this.state.name}</p> 
                   <img className = "img-fluid" src= {this.state.source}/>
                   
                </div>
                </Link>
             </Container>

            // <div>
            //     {this.props.name}
            //     {this.props.slug}
            //     {this.props.source}
            // </div>
        )
    }
}

export default Card;