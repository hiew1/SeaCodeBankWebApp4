import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class FinalTotal extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const items = this.props.itemsListing;
        let finalTotal = 0;
        items.map((check1, index)=>{
            finalTotal = finalTotal + check1.amount;
        });
        return(
            <Container>
                <Row>
                    <Col>
                        <h4>${finalTotal}</h4>
                    </Col>
                </Row>
            </Container>
        );
    }
}