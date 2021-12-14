import "./App.css";
import React from "react";
import web3 from "./web3";
import Patient from './patient';

class App extends React.Component {

  state={
    numpatients:'',
    p_id: '',
    p_name:'',
    p_address:'',
    p_age:'',
    p_gender:'',
    p_emailid:'',
    p_phone:'',
    p_date : '',
    display_name:'',
    display_address:'',
    display_age:'',
    display_gender:'',
    display_emailid:'',
    display_phone:'',
    value:'',

    message:'',
    display_details:''
  };

  async componentDidMount(){
    const owner= await Patient.methods.owner().call();
    const numpatients=await Patient.methods.numpatients().call();
    this.setState({owner,numpatients});
  }

  onSubmit=async (event)=>{
    event.preventDefault();

    const accounts= await web3.eth.getAccounts();

    this.setState({message: 'Waiting for Patient to Enter details......'})
    await Patient.methods.setPatientDetails(this.state.p_id, this.state.p_name, this.state.p_age, this.state.p_gender,this.state.p_emailid,this.state.p_phone,this.state.p_date,this.state.p_address).send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value,'ether')});
    this.setState({message: 'Patient registered Successfully!!'})
  };
  onGet=async (event)=>{
    event.preventDefault();
    this.state.display_name=await Patient.methods.getPatientName(this.state.p_id).call();
    this.state.display_age=await Patient.methods.getPatientAge(this.state.p_id).call();
    this.state.display_gender=await Patient.methods.getPatientGender(this.state.p_id).call();
    this.state.display_emailid=await Patient.methods.getPatientEmailID(this.state.p_id).call();
    this.state.display_phone=await Patient.methods.getPatientPhone(this.state.p_id).call();
    this.state.display_address=await Patient.methods.getPatientAddress(this.state.p_id).call();
    // this.state.p_=await Patient.methods.getPatientName(this.state.p_id).call();
    this.setState({display_name : this.state.display_name});
    this.setState({display_age : this.state.display_age});
    this.setState({display_gender : this.state.display_gender});
    this.setState({display_emailid : this.state.display_emailid});
    this.setState({display_phone : this.state.display_phone});
    this.setState({display_address : this.state.display_address});
  };


  render() {
    return (
      <div>
        <h2>Patient Contract</h2>
        <p>
          This contract is managed by {this.state.owner}
        </p>
        <p>  
          There are currently {this.state.numpatients} patients registered in our project.
        </p>

        <form onSubmit={this.onSubmit}>
          <h4>Register Patient</h4>
          <div>
            <label>Patient_ID</label>
            <input
              p_id={this.state.value}
              onChange={event=> this.setState({p_id: event.target.value})}
            />

          <br/>
            <label>Patient_Name</label>
            <input
              p_name={this.state.value}
              onChange={event=> this.setState({p_name: event.target.value})}
            />

          <br/>
          <br/>
            <label>Patient Gender</label>
            <input
              p_gender={this.state.value}
              onChange={event=> this.setState({p_gender: event.target.value})}
            />
            <label>Patient_Age</label>
            <input
              p_age={this.state.value}
              onChange={event=> this.setState({p_age: event.target.value})}
            />

          <br/>
            <label>Patient_Address</label>
            <input
              p_address={this.state.value}
              onChange={event=> this.setState({p_address: event.target.value})}
            />

          <br/>
            <label>Patient Phone Number</label>
            <input
              p_phone={this.state.value}
              onChange={event=> this.setState({p_phone: event.target.value})}
            />
          <br/>
            <label>Patient Email ID</label>
            <input
              p_emailid={this.state.value}
              onChange={event=> this.setState({p_emailid: event.target.value})}
            />
          
          <br/>
            <label>Date of Registration</label>
            <input
              p_weight={this.state.value}
              onChange={event=> this.setState({p_weight: event.target.value})}
            />
            <br/>
            <label>Enter Amount of Ether to Add</label>
            <input
              value={this.state.value}
              onChange={event=> this.setState({value: event.target.value})}
            />
          

          </div>
          <button 
            size = "large" 
            variant = "contained"
            color = "secondary">
            Enter
          </button>
        </form>
        <h4>{this.state.message}</h4>

        <hr/>

        <form onSubmit={this.onGet}>
          <h4>Get Patient Details</h4>
          <div>
            <label>Enter Patient_ID</label>
            <input
              p_id={this.state.value}
              onChange={event=> this.setState({p_id: event.target.value})}
            />

            <br/>
          </div>
          <button>Get Details</button>
          <p>
          Patient Name: {this.state.display_name}
          <br/>
          Patient Age: {this.state.display_age}
          <br/>
          Patient Gender: {this.state.display_gender}
          <br/>
          Patient Address: {this.state.display_address}
          <br/>
          Patient Phone: {this.state.display_phone}
          <br/>
          Patient EmailID: {this.state.display_emailid}
          </p>
        </form>
        
      </div>
    );
  }
}
export default App;