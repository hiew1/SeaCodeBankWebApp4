import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class ChecksAndTotals extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const items = this.props.itemsListing;
        let htmlMarkup = [];

        items.map((check1, index )=>{
            htmlMarkup.push(
                <Row key={'index-'+ index}>
                    <Col>{check1.description}</Col>
                    <Col>${check1.amount}</Col>
                </Row>
            );
        });
        return(
            <Container>
                {htmlMarkup}
            </Container>
        );
    }
}