import "./App.css";
import React from "react";
import web3 from "./web3";
import examineBody from './examineBody';

class App extends React.Component {

  state={
    manager:'',
    numReports:'',
    prevRecords:'',
    p_id: '',
    bloodTest:'',
    urineTest: '',
    ECG:'',
    BP:'',
    prevDates:'',

    dis_id: '',
    message:'',
    newMessage:'',
    display_details:''
  };

  async componentDidMount(){
    const manager= await examineBody.methods.manager().call();
    const numReports=await examineBody.methods.numReports().call();
    const prevRecords=await examineBody.methods.prevRecords().call();
    this.setState({manager, numReports, prevRecords});
  }

  onSubmit=async (event)=>{
    event.preventDefault();

    const accounts= await web3.eth.getAccounts();

    this.setState({message: 'Waiting for transaction to Complete......'})
    await examineBody.methods.addReport(this.state.p_id, this.state.bloodTest, this.state.urineTest, this.state.ECG, this.state.BP).send({
      from: accounts[0]
    });
    this.setState({message: 'Report Submitted Successfully!!'})
  };

  onSubmitPrev=async (event)=>{
    event.preventDefault();

    const accounts= await web3.eth.getAccounts();

    this.setState({newMessage: 'Waiting for transaction to Complete......'})
    await examineBody.methods.addPreviousDates(this.state.p_id, this.state.prevDates).send({
      from: accounts[0]
    });
    this.setState({newMessage: 'Transaction Completed Successfully!!'})
  };

  onGet=async (event)=>{
    event.preventDefault();
    this.state.bloodTest=await examineBody.methods.getBloodTest(this.state.dis_id).call();
    this.state.urineTest=await examineBody.methods.getUrineTest(this.state.dis_id).call();
    this.state.ECG=await examineBody.methods.getBloodECG(this.state.dis_id).call();
    this.state.BP=await examineBody.methods.getBloodPressure(this.state.dis_id).call();

    this.setState({bloodTest: this.state.bloodTest, urineTest: this.state.urineTest, ECG: this.state.ECG, BP: this.state.BP});
  };

  onGetPrev=async (event)=>{
    event.preventDefault();
    this.state.prevDates=await examineBody.methods.getPreviousDates(this.state.dis_id).call();

    this.setState({prevDates: this.state.prevDates});
  };

  render() {
    return (
      <div>
        <h2>ExamineBody Contract</h2>
        <p>
          This contract is managed by {this.state.manager}
        </p>
        <p>  
          There are currently {this.state.numReports} reports entered using our contract.
          Currently {this.state.prevRecords} patients have stored their previous medical history in our project.
        </p>

        <form onSubmit={this.onSubmit}>
          <h4>Add Patient Report</h4>
          <div>
            <label>Patient_ID</label>
            <input
              p_id={this.state.value}
              onChange={event=> this.setState({p_id: event.target.value})}
            />

          <br/>
            <label>Blood Test</label>
            <input
              bloodTest={this.state.value}
              onChange={event=> this.setState({bloodTest: event.target.value})}
            />

          <br/>
            <label>Urine Test</label>
            <input
              urineTest={this.state.value}
              onChange={event=> this.setState({urineTest: event.target.value})}
            />

          <br/>
            <label>ECG</label>
            <input
              ECG={this.state.value}
              onChange={event=> this.setState({ECG: event.target.value})}
            />

          <br/>
            <label>Blood Pressure</label>
            <input
              BP={this.state.value}
              onChange={event=> this.setState({BP: event.target.value})}
            />

          </div>
          <button>Enter</button>
        </form>
        <h4>{this.state.message}</h4>

        <hr/>

        <form onSubmit={this.onSubmitPrev}>
          <h4>Add Previous checkup dates of a Patient</h4>
          <div>
            <label>Patient_ID</label>
            <input
              p_id={this.state.value}
              onChange={event=> this.setState({p_id: event.target.value})}
            />

          <br/>
            <label>Previous Checkup Dates</label>
            <input
              prevDates={this.state.value}
              onChange={event=> this.setState({prevDates: event.target.value})}
            />
          </div>
          <button>Enter</button>
        </form>
        <h4>{this.state.newMessage}</h4>

        <hr/>

        <form onSubmit={this.onGet}>
          <h4>Get Patient Report</h4>
          <div>
            <label>Enter Patient_ID</label>
            <input
              dis_id={this.state.value}
              onChange={event=> this.setState({dis_id: event.target.value})}
            />

            <br/>
          </div>
          <button>Get Details</button>
        </form>
        <p>
          Blood Test: {this.state.bloodTest}
          <br/>
          Urine Test: {this.state.urineTest}
          <br/>
          ECG: {this.state.ECG}
          <br/>
          Blood Pressure: {this.state.BP}
        </p>

        <hr/>
        <form onSubmit={this.onGetPrev}>
          <h4>Get Previous Checkup Dates</h4>
          <div>
            <label>Enter Patient_ID</label>
            <input
              dis_id={this.state.value}
              onChange={event=> this.setState({dis_id: event.target.value})}
            />

            <br/>
          </div>
          <button>Get Details</button>
        </form>
        <p>
          Previous Dates: {this.state.prevDates}
        </p>
      </div>
    );
  }
}
export default App;
