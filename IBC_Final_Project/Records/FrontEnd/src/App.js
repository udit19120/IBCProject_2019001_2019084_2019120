import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from "./web3";
import records from './records';

class App extends React.Component {

  state={
    r_owner:'',
    message:'',
    r__id: '',
    p__id:'',
    d__id: '',
    _pers_hist:'',
    _issue:'',
    _visits:'',
    _diag:'',
    _startDate:'',
    display_issue:'',
    display_pers_hist:'',
    display_diag:'',

 
    r___id:''    
  };

  async componentDidMount(){
    const r_owner= await records.methods.r_owner().call();
    this.setState({r_owner});
  }

  onSubmit=async (event)=>{
    event.preventDefault();

    const accounts= await web3.eth.getAccounts();

    this.setState({message: 'Waiting for transaction to Complete......'})
    await records.methods.addRecord(this.state.r__id, this.state.p__id, this.state.d__id, this.state._pers_hist, this.state._issue,this.state._visits,this.state._diag,this.state._startDate).send({
      from: accounts[0]
    });
    this.setState({message: 'Record added successfully'})
  };
  onGet=async (event)=>{
    event.preventDefault();
    this.state.display_issue=await records.methods.getRecordIssue(this.state.r___id).call();
    this.state.display_diag=await records.methods.getRecordDiag(this.state.r___id).call();
    this.state.display_pers_hist=await records.methods.getRecordHist(this.state.r___id).call();

    this.setState({display_issue: this.state.display_issue, display_diag: this.state.display_diag, display_pers_hist: this.state.display_pers_hist});
  };


  render() {
    return (
      <div>
        <h2>Records Contract</h2>
        <p>
          This contract is managed by {this.state.r_owner}
        </p>
       
        <form onSubmit={this.onSubmit}>
          <h4>Add Record</h4>
          <div>
            <label>Record_ID</label>
            <input
              r__id={this.state.value}
              onChange={event=> this.setState({r__id: event.target.value})}
            />

          <br/>
            <label>Patient_ID</label>
            <input
              p__id={this.state.value}
              onChange={event=> this.setState({p__id: event.target.value})}
            />

          <br/>
            <label>Doctor_ID</label>
            <input
              d__id={this.state.value}
              onChange={event=> this.setState({d__id: event.target.value})}
            />

          <br/>
            <label>Personal History</label>
            <input
              _pers_hist={this.state.value}
              onChange={event=> this.setState({_pers_hist: event.target.value})}
            />

          <br/>
            <label>Issue</label>
            <input
              _issue={this.state.value}
              onChange={event=> this.setState({_issue: event.target.value})}
            />

          <br/>
            <label>Number of Visits</label>
            <input
              _visits={this.state.value}
              onChange={event=> this.setState({_visits: event.target.value})}
            />

            <br/>
            <label>Diagnosis</label>
            <input
              _diag={this.state.value}
              onChange={event=> this.setState({_diag: event.target.value})}
            />

            <br/>
            <label>Start Date</label>
            <input
              _startDate={this.state.value}
              onChange={event=> this.setState({_startDate: event.target.value})}
            />

          </div>
          <button>Enter</button>
        </form>
        <h4>{this.state.message}</h4>

        <hr/>
        <form onSubmit={this.onGet}>
          <h4>Get Record Details</h4>
          <div>
            <label>Enter Record_ID</label>
            <input
              r___id={this.state.value}
              onChange={event=> this.setState({r___id: event.target.value})}
            />

            <br/>
          </div>
          <button>Get Details</button>
        </form>
        <p>
          Issue: {this.state.display_issue}
          <br/>
          Personal History: {this.state.display_pers_hist}
          <br/>
          Diagnosis: {this.state.display_diag}
        </p>
      </div>
    );
  }
}
export default App;
