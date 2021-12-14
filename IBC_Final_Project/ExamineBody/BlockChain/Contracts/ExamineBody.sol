pragma solidity ^0.4.17;

contract ExamineBody{
    struct patient{
        string patient_id;
    }
    patient p;


    struct patientReport {   
        string blood_test;
        string urine_test;
        string ecg;
        string blood_pressure;
    }
    patientReport pReport;
      
    struct previous
    {
        string previousLog;
    }
    previous prev;

    mapping(string => patientReport) Reports;
    mapping(string => previous) prevDates;
    mapping(string => patient) patientList;

    address public manager;
    uint public numReports;
    uint public prevRecords;

    modifier restricted() {
        require(msg.sender==manager);
        _;
    }

    function ExamineBody() public 
    {
        manager=msg.sender;
        numReports=0;
        prevRecords=0;
    }

    function addPreviousDates(string patient_id,string _previous) public restricted 
    {
        prev.previousLog = _previous;
        prevDates[patient_id] = prev;
        prevRecords++;
    }

    function getPreviousDates(string memory patient_id) public view returns(string memory)
    {
        previous memory prev1=prevDates[patient_id];
        return prev1.previousLog;
    }

    function addReport(string patient_id,string bloodTest, string urineTest, string ECG, string BP) public restricted
    {
        pReport.blood_test=bloodTest;
        pReport.urine_test=urineTest;
        pReport.ecg=ECG;
        pReport.blood_pressure=BP;
        Reports[patient_id]=pReport;
        numReports++;
    }

    function getBloodTest(string memory patient_id) public view returns(string memory)
    {
        patientReport memory myReport= Reports[patient_id];
        return myReport.blood_test;    
    }

    function getUrineTest(string memory patient_id) public view returns(string memory)
    {
        patientReport memory myReport= Reports[patient_id];
        return myReport.urine_test;    
    }

    function getBloodECG(string memory patient_id) public view returns(string memory)
    {
        patientReport memory myReport= Reports[patient_id];
        return myReport.ecg;    
    }

    function getBloodPressure(string memory patient_id) public view returns(string memory)
    {
        patientReport memory myReport= Reports[patient_id];
        return myReport.blood_pressure;    
    }




}