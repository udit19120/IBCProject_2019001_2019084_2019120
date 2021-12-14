import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from "./web3";
import hospital from './hospital';

class App extends React.Component {

  state={
    healthDept:'',
    numHospitals:'',
    h_id: '',
    h_name:'',
    h_type: '',
    h_address:'',
    h_number:'',

    d_id: '',
    d_name:'',
    d_type:'',
    d_address:'',
    d_number:'',
    message:'',
    display_details:''
  };

  async componentDidMount(){
    const healthDept= await hospital.methods.healthDept().call();
    const numHospitals=await hospital.methods.numHospitals().call();
    this.setState({healthDept, numHospitals});
  }

  onSubmit=async (event)=>{
    event.preventDefault();

    const accounts= await web3.eth.getAccounts();

    this.setState({message: 'Waiting for transaction to Complete......'})
    await hospital.methods.addHospital(this.state.h_id, this.state.h_name, this.state.h_type, this.state.h_address, this.state.h_number).send({
      from: accounts[0]
    });
    this.setState({message: 'Hospital registered Successfully!!'})
  };

  onGet=async (event)=>{
    event.preventDefault();
    this.state.d_name=await hospital.methods.getName(this.state.h_id).call();
    this.state.d_type= await hospital.methods.getType(this.state.h_id).call();
    this.state.d_address=await hospital.methods.getH_Address(this.state.h_id).call();
    this.state.d_number=await hospital.methods.getNumber(this.state.h_id).call();


    this.setState({d_name: this.state.d_name});
    this.setState({d_type: this.state.d_type});
    this.setState({d_address: this.state.d_address});
    this.setState({d_number: this.state.d_number});
  };

  render() {
    return (
      <div>
        <h2>Hospital Contract</h2>
        <p>
          This contract is managed by {this.state.healthDept}
        </p>
        <p>  
          There are currently {this.state.numHospitals} hospitals registered in our project.
        </p>

        <form onSubmit={this.onSubmit}>
          <h4>Register Hospital</h4>
          <div>
            <label>Hospital_ID</label>
            <input
              h_id={this.state.value}
              onChange={event=> this.setState({h_id: event.target.value})}
            />

          <br/>
            <label>Hospital_Name</label>
            <input
              h_name={this.state.value}
              onChange={event=> this.setState({h_name: event.target.value})}
            />

          <br/>
            <label>Hospital_Type</label>
            <input
              h_type={this.state.value}
              onChange={event=> this.setState({h_type: event.target.value})}
            />

          <br/>
            <label>Hospital_Address</label>
            <input
              h_address={this.state.value}
              onChange={event=> this.setState({h_address: event.target.value})}
            />

          <br/>
            <label>Hospital_Number</label>
            <input
              h_number={this.state.value}
              onChange={event=> this.setState({h_number: event.target.value})}
            />

          </div>
          <button>Enter</button>
        </form>
        <h4>{this.state.message}</h4>

        <hr/>

        <form onSubmit={this.onGet}>
          <h4>Get Hospital Details</h4>
          <div>
            <label>Enter Hospital_ID</label>
            <input
              h_id={this.state.value}
              onChange={event=> this.setState({h_id: event.target.value})}
            />

            <br/>
          </div>
          <button>Get Details</button>
        </form>
        <p>
          Hospital Name: {this.state.d_name}
          <br/>
          Hospital Type: {this.state.d_type}
          <br/>
          Hospital Address: {this.state.d_address}
          <br/>
          Hospital Number: {this.state.d_number}
        </p>
      </div>
    );
  }
}
export default App;
