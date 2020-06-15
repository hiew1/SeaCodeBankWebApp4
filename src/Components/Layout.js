import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomTextField from "./CustomTextField";
import CustomTextArea from './CustomTextArea';
import ProductsAndPrices from "./ProductsAndPricesListing";
import FinalTotal from "./FinalTotal";
import DescriptionAndAmount from './InputDescriptionAndAmount';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DialogWindow from './DialogWindow';
import CustomCard from "./CustomCard";
import Card from 'react-bootstrap/Card';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            adminName : '',
            customerName : '',
            customerAddress : '',
            depositDescription : '',
            termsAndConditions : '',
            descriptionVal : '',
            totalVal : '',
            itemsListing : [],
            show : false,
            title : '',
            content : ''

        }
        this.textFieldsHandler = this.textFieldsHandler.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
    }

    closeWindow(){
        this.setState({
            show : false
        });

        console.log('You want to close this dialog box.');
    }

    handleSubmit(event){

        // final total
        const currentItems = this.state.itemsListing;
        let finalTotal = 0;
        currentItems.map((product, index)=>{
            finalTotal = finalTotal + product.total;
        });

        // deposit information
        const Deposit = {
            adminName : input.adminName,
            customerName : input.customerName,
            customerAddress : input.customerAddress,
            items : input.items,
            finalTotal : input.finalTotal,
            terms : input.terms,
            depositDescription : input.depositDescription
        };

        fetch('/api/createdeposit', {
            method : 'POST',
            body : JSON.stringify(Deposit),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then((response)=>{
            if(response.ok){
                // if everything is working
                this.setState({
                   show : true,
                   title : 'Success!!',
                   content : 'The deposit was created successfully.'
                });
                console.log('The deposit was saved');
            }else{
                // something went wrong
                this.setState({
                    show : true,
                    title : 'Error!!',
                    content : 'Problems when creating the deposit, try it again.'
                });
                console.log('Problems when saving the deposit');
            }
        });

        event.preventDefault();
        console.log('You want to create a new deposit');
    }

    buttonClick(){
        this.setState((state, props)=>{
            const currentArray = this.state.itemsListing;

            return {
                itemsListing : currentArray.concat([
                    {
                        description : state.descriptionVal,
                        total : parseFloat(state.totalVal)
                    }
                ])
            }
        });
        console.log('You want to add an item to the listing');
    }

    textFieldsHandler( event ){
        if(event.target.name === 'itemDescription'){
            this.setState({
                descriptionVal : event.target.value
            });

            console.log('Item Description: ' + this.state.descriptionVal);
        }
        if(event.target.name === 'itemTotal'){
            this.setState({
                totalVal : event.target.value
            });

            console.log('Item total: ' + this.state.totalVal);
        }
        if(event.target.name === 'termsAndConditions'){
            this.setState({
                termsAndConditions : event.target.value
            });

            console.log('Terms and Conditions: ' + this.state.termsAndConditions);
        }
        if(event.target.name === 'depositDescription'){
            this.setState({
                depositDescription : event.target.value
            });

            console.log('Deposit Description: ' + this.state.depositDescription);
        }

        if(event.target.name === 'adminName'){
            this.setState({
                adminName : event.target.value
            });

            console.log('Admin Name: ' + this.state.adminName);
        }
        if(event.target.name === 'customerName'){
            this.setState({
                customerName : event.target.value
            });

            console.log('Customer Name: ' + this.state.customerName);
        }
        if(event.target.name === 'customerAddress'){
            this.setState({
                customerAddress : event.target.value
            });

            console.log('Customer Address: ' + this.state.customerAddress);
        }
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Container>
                    <Row style={{marginTop: '1em'}}>
                        <Col>
                            <CustomCard head='Deposit Description'>
                                <CustomTextArea
                                    label='Deposit Description'
                                    name='depositDescription'
                                    val={this.state.depositDescription}
                                    inputHandler={this.textFieldsHandler}/>
                            </CustomCard>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1em'}}>
                        <Col>
                            <CustomCard head="Admin's information">
                                <CustomTextField
                                    customId='admin-name'
                                    label="Admin's name"
                                    placeholder='Type in the name...'
                                    name='adminName'
                                    val={this.state.adminName}
                                    inputHandler={this.textFieldsHandler}
                                    text='Enter the full name'/>
                            </CustomCard>
                        </Col>
                        <Col>
                            <CustomCard head="Customer's information">
                                <CustomTextField
                                    customId='customer-name'
                                    label="Customer's name"
                                    placeholder='Type in the name...'
                                    name='customerName'
                                    val={this.state.customerName}
                                    inputHandler={this.textFieldsHandler}
                                    text='Enter the full name'/>
                                <CustomTextField
                                    customId='customer-address'
                                    label="Customer's address"
                                    placeholder='Type in the name...'
                                    name='customerAddress'
                                    val={this.state.customerAddress}
                                    inputHandler={this.textFieldsHandler}
                                    text='Enter the full address'/>
                            </CustomCard>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1em'}}>
                        <Col>
                            <CustomCard head="Items/Services purchased">
                                <ProductsAndPrices itemsListing={this.state.itemsListing}/>
                                <DescriptionAndAmount
                                    descriptionVal={this.state.descriptionVal}
                                    totalVal={this.state.totalVal}
                                    customHandler={this.textFieldsHandler}
                                    buttonHandler={this.buttonClick}/>
                            </CustomCard>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1em'}}>
                        <Col>
                            <CustomCard head='Final Total'>
                                <FinalTotal itemsListing={this.state.itemsListing}/>
                            </CustomCard>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1em'}}>
                        <Col>
                            <CustomCard head='Terms and Conditions'>
                                <CustomTextArea
                                    label='Terms and Conditions'
                                    name='termsAndConditions'
                                    val={this.state.TermsAndConditions}
                                    inputHandler={this.textFieldsHandler}/>
                            </CustomCard>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '1em'}}>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Button
                                        type='submit'
                                        variant = 'primary'
                                        size = 'lg'>
                                        Create a Deposit
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <DialogWindow
                    show={this.state.show}
                    title={this.state.title}
                    content={this.state.content}
                    closeHandler={this.closeWindow}/>
        </Form>
    );
    }
}