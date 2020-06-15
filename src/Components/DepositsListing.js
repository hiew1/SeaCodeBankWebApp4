import React from 'react';
import DepositsTable from "./DepositsTable";
import DialogWindow from "./DialogWindow";

export default class DepositsListing extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            depositsData : [],
            show : false,
            title : '',
            content : ''
        }

        this.deleteHandler = this.deleteHandler.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
    }

    closeWindow(){
        this.setState({
            show : false
        });
    }


    deleteHandler(depositId){
        fetch('/api/delete/'+depositId,{
            method : 'DELETE'
        }).then((response)=>{
            if(response.ok){
                // the deposit was removed
                this.setState({
                    show : true,
                    title : 'Success!!',
                    content : 'The deposit was removed successfully.'
                });

                const depositsCopy = this.state.depositsData;

                // removing id and description
                this.state.depositsData.map((item, index)=>{
                    if(item.id === depositId){
                        // removing the invoice from the listing on the screen
                        depositsCopy.splice(index, 1);
                        this.setState({
                            depositsData : depositsCopy
                        });
                    }
                });
            }else {
                // something went wrong
                this.setState({
                    show: true,
                    title: 'Error!!',
                    content: 'Problems encountered when removing the deposit.'
                })
            }
        });
        console.log('You want to delete deposit : ' + depositId);
    }

    componentDidMount(){
        // this method runs automatically
        fetch('/api/readdeposit/all',{
            method: 'GET'
        }).then(( response )=>{
            if (response.ok){
                // everything is working
                return response.json();
                console.log(response.json())
            } else {
                // something went wrong
                console.log('Problems when reading the information')
            }
        }).then((responseASJson)=>{
            let depositsInfo = [];

            responseASJson.map((deposit, index )=>{
                depositsInfo.push(
                    {
                        id : deposit._id,
                        description : deposit.depositDescription
                    }
                );
            });

            this.setState((state, props)=>{
                return {
                    depositsData : state.depositsData.concat(depositsInfo)
                }
            });

            console.log(this.state.depositsData);
        })
    }

    render(){
        return(
            <div>
                <DepositsTable
                    depositsData={this.state.depositsData}
                    handleDelete={this.deleteHandler}
                />
                <DialogWindow
                    show={this.state.show}
                    title={this.state.title}
                    content={this.state.content}
                    closeHandler={this.closeWindow}/>
            </div>
        );
    }
}