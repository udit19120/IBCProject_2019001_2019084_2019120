pragma solidity 0.4.17;

contract Patient
{
    address public owner;
    uint public numpatients;
    struct Patient_struct
    {
        string patientID;
        string patientName;
        string age;
        string gender;
        string height;
        string weight;
        string emailID;
        string phoneNumber;
        string date;
        string p_address;
    }
    
    mapping(string => Patient_struct) patientList;
    
    Patient_struct p;
    
    // address owner;
    
    function Patient() public{
        owner=msg.sender;
        numpatients=0;
    }
    
    // modifier isOwner() 
    // {
    //     require(msg.sender == owner, "Access is not allowed");
    //      _;
    // }
    
    function setPatientDetails(string memory patientID,string memory patientName, string memory age, string memory gender,string memory emailID, string memory phoneNumber, string memory date,string memory p_address) public payable 
    {
        require(msg.value>0.0001 ether);
        
        p.patientID=patientID;
        p.patientName=patientName;
        p.age=age;
        p.gender=gender;
        p.emailID=emailID;
        p.phoneNumber=phoneNumber;
        p.date=date;
        p.p_address = p_address;
        patientList[patientID] = p;
        numpatients++;
    }
     
    function getPatientID(string memory patientID) public view returns (string memory)
    {
        Patient_struct memory p1 = patientList[patientID];
        return p1.patientID;
    }
    function getPatientName(string memory patientID) public view returns (string memory)
    {
        Patient_struct memory p1 = patientList[patientID];
        return p1.patientName;
    }
    function getPatientAge(string memory patientID) public view returns (string memory)
    {
        Patient_struct memory p1 = patientList[patientID];
        return p1.age;
    }
    function getPatientGender(string memory patientID) public view returns (string memory)
    {
        Patient_struct memory p1 = patientList[patientID];
        return p1.gender;
    }
    function getPatientEmailID(string memory patientID) public view returns (string memory)
    {
        Patient_struct memory p1 = patientList[patientID];
        return p1.emailID;
    }
    function getPatientPhone(string memory patientID) public view returns (string memory)
    {
        Patient_struct memory p1 = patientList[patientID];
        return p1.phoneNumber;
    }
    function getPatientAddress(string memory patientID) public view returns (string memory)
    {
        Patient_struct memory p1 = patientList[patientID];
        return p1.p_address;
    }
    
    
}