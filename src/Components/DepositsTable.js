import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default class DepositsTable extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const idsAndDescriptions = this.props.depositsData;
        let htmlMarkup = [];

        idsAndDescriptions.map((deposit, index)=>{
            htmlMarkup.push(
                <Row key={'index-'+index }>
                    <Col>
                        <h5>{deposit.id}</h5>
                    </Col>
                    <Col>
                        <h5>{deposit.description}</h5>
                    </Col>
                    <Col>
                        <ButtonGroup>
                            <Button
                                variant='danger'
                                onClick={
                                    ()=>{
                                        this.props.handleDelete(deposit.id)
                                    }
                                }>
                                Delete
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            );
        });
        return(
            <Container>
                <Row>
                    <Col>
                        <h4>Deposit ID</h4>
                    </Col>
                    <Col>
                        <h4>Description</h4>
                    </Col>
                    <Col>
                        <h4>Actions</h4>
                    </Col>
                </Row>
                {htmlMarkup}
            </Container>
        );
    }
}