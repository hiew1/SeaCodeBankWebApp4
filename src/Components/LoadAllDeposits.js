import React from 'react';
import DepositsListing from './DepositsListing';
import Card from 'react-bootstrap/Card';

export default function LoadAllDeposits(props){
    return (
        <Card bg='dark' text='white'>
            <Card.Header as='h3' style={{textAlign: 'center'}}>
                Deposits Listing
            </Card.Header>
            <Card.Body>
                <DepositsListing/>
            </Card.Body>
        </Card>
    );
}