import React from "react";
import styled from 'styled-components';

const Container = styled.div `
margin-top : 10;
margin-bottom : 20;
color : Global.color.body;
font-family : Global.font.primary;
`

class LargeCard extends React.Component {
    render() {
        return (
            <Container className= "row">
                <div class= "col-md-12">
                    <h1>Expoler le monde</h1>
                </div>
                <div>
                    <LargeCard>
                        
                    </LargeCard>
                </div>

            </Container>
        
        )
    }

}

export default LargeCard;