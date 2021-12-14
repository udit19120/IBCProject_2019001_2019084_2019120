import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from "./web3";
import doctor from './doctor';

class App extends React.Component {

  state={
    manager:'',
    numDoctors:'',
    d_id: '',
    d_name:'',
    d_specialisation: '',
    d_address:'',
    d_number:'',

    dis_id: '',
    dis_name:'',
    dis_type:'',
    dis_address:'',
    dis_number:'',
    message:'',
    display_details:''
  };

  async componentDidMount(){
    const manager= await doctor.methods.manager().call();
    const numDoctors=await doctor.methods.numDoctors().call();
    this.setState({manager, numDoctors});
  }

  onSubmit=async (event)=>{
    event.preventDefault();

    const accounts= await web3.eth.getAccounts();

    this.setState({message: 'Waiting for transaction to Complete......'})
    await doctor.methods.addDoctor(this.state.d_id, this.state.d_name, this.state.d_specialisation, this.state.d_address, this.state.d_number).send({
      from: accounts[0]
    });
    this.setState({message: 'Doctor registered Successfully!!'})
  };

  onGet=async (event)=>{
    event.preventDefault();
    this.state.dis_name=await doctor.methods.getName(this.state.d_id).call();
    this.state.dis_specialisation=await doctor.methods.getSpecialisation(this.state.d_id).call();
    this.state.dis_address=await doctor.methods.getD_Address(this.state.d_id).call();
    this.state.dis_number=await doctor.methods.getNumber(this.state.d_id).call();

    this.setState({dis_name: this.state.dis_name, dis_specialisation: this.state.dis_specialisation, dis_address: this.state.dis_address, dis_number: this.state.dis_number});
  };

  render() {
    return (
      <div>
        <h2>Doctor Contract</h2>
        <p>
          This contract is managed by {this.state.manager}
        </p>
        <p>  
          There are currently {this.state.numDoctors} doctor registered in our project.
        </p>

        <form onSubmit={this.onSubmit}>
          <h4>Register Doctor</h4>
          <div>
            <label>Doctor_ID</label>
            <input
              d_id={this.state.value}
              onChange={event=> this.setState({d_id: event.target.value})}
            />

          <br/>
            <label>Doctor_Name</label>
            <input
              d_name={this.state.value}
              onChange={event=> this.setState({d_name: event.target.value})}
            />

          <br/>
            <label>Doctor_Specialisation</label>
            <input
              d_specialisation={this.state.value}
              onChange={event=> this.setState({d_specialisation: event.target.value})}
            />

          <br/>
            <label>Doctor_Address</label>
            <input
              d_address={this.state.value}
              onChange={event=> this.setState({d_address: event.target.value})}
            />

          <br/>
            <label>Phone_Number</label>
            <input
              d_number={this.state.value}
              onChange={event=> this.setState({d_number: event.target.value})}
            />

          </div>
          <button>Enter</button>
        </form>
        <h4>{this.state.message}</h4>

        <hr/>

        <form onSubmit={this.onGet}>
          <h4>Get Doctor Details</h4>
          <div>
            <label>Enter Doctor_ID</label>
            <input
              d_id={this.state.value}
              onChange={event=> this.setState({d_id: event.target.value})}
            />

            <br/>
          </div>
          <button>Get Details</button>
        </form>
        <p>
          Doctor Name: {this.state.dis_name}
          <br/>
          Doctor Type: {this.state.dis_specialisation}
          <br/>
          Doctor Address: {this.state.dis_address}
          <br/>
          Doctor Number: {this.state.dis_number}
        </p>
      </div>
    );
  }
}
export default App;
