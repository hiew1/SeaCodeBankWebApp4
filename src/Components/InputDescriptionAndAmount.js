import React from 'react';
import Container from 'react-bootstrap/Container';
import CustomTextField from "./CustomTextField";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class InputDescriptionAndAmount extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <CustomTextField
                            customId='itemDescription'
                            label='Check Description'
                            name='itemDescription'
                            placeholder='Enter a short description...'
                            val={this.props.descriptionVal}
                            inputHandler={this.props.customHandler}
                        />
                    </Col>
                    <Col>
                        <CustomTextField
                            customId='itemAmount'
                            label='Check Amount'
                            name='itemAmount'
                            placeholder='Enter the amount...'
                            val={this.props.amountVal}
                            inputHandler={this.props.customHandler}
                        />
                    </Col>
                    <Col>
                        <Button
                            variant='primary'
                            size='lg'
                            style={{marginTop:'2em'}}
                            onClick={this.props.buttonHandler}>
                            Submit item
                        </Button>
                    </Col>
                </Row>
            </Container>

        );
    }
}