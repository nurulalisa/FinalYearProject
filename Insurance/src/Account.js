import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
//import { Infoweb3 } from './Infoweb3' ;
import { Store } from './Store' ; 
import Web3  from 'web3';
//import * as Infoweb3 from './Infoweb3';
export class Account extends Component {
//export const Account = () => (
  //class Account extends Component {
    async componentWillMount() {
      // Detect Metamask
      const metamaskInstalled = typeof window.web3 !== 'undefined'
      this.setState({ metamaskInstalled })
      if(metamaskInstalled) {
        await this.loadWeb3()
       await this.loadBlockchainData()
      }
    }
  
    async loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
      }
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
      }
      else {
        //window.alert('KO BUAT APE TU WOI')
        // DO NOTHING...
      }
    }
    async loadBlockchainData() {
      const web3 = window.web3
      // Load account
     const accounts = await web3.eth.getAccounts()
     this.setState({ account: accounts[0] })

     this.setState({ loading: false})
    }

    constructor(props) {
      super(props)
      this.state = {
        account: '',
       loading: true
      }
   
      this.newForm = this.newForm.bind(this)
    this.formRecorded = this.formRecorded.bind(this)
  }

  newForm(name, member) {
    this.setState({ loading: true })
    this.state.Store.methods.newForm(name, member).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  formRecorded(icNumb) {
    console.log("tipping post", icNumb)
    this.setState({ loading: true })
    this.state.socialNetwork.methods.tipPost(icNumb).send({ from: this.state.account, value: '' })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }



  render() {
    return (
  <div id = "content"> 
  
  <Form onSubmit = {this.onSubimt}>
   <h2>Fill In The Form</h2>
  <script type = " text/javascript"></script>
  <br/>
  <input id = "full name" type = "text" placeholder = "FULL NAME"/>
  <br/>
    <br/>
    <input id = "ic number" type = "text" placeholder = "IC NUMBER"></input>
    <br/>
    <br/>
    <input id = "member" type = "text" placeholder = "MEMBER"></input>
    <br/>
    <br/>
    
      
    <Button bsstyle = "primary" type = "submit">SUBMIT</Button>
      </Form>
    </div>
)
}
}

//<input type = "file" onChange = {this.captureFile} />
 
