pragma solidity ^0.4.17;
contract Doctor{
    address public manager;
    uint public numDoctors;

    modifier restricted() {
        require(msg.sender==manager);
        _;
    }

    function Doctor() public{
        manager=msg.sender;
        numDoctors=0;
    }

    struct Doctor_struct {
        string name;
        string doctor_specialisation;
        string doctor_address;
        string phone_number;
    }

    Doctor_struct d;

    mapping(string=>Doctor_struct) doctorList;

    function addDoctor(string d_id, string d_name, string d_specialisation, string d_address, string d_number) public restricted {
        d.name=d_name;
        d.doctor_address=d_address;
        d.doctor_specialisation=d_specialisation;
        d.phone_number=d_number;

        doctorList[d_id]=d;
        numDoctors++;
    }


    function getName(string memory d_id) public view returns(string)
    {
        Doctor_struct memory temp_d=doctorList[d_id];
        return temp_d.name;
    }

    function getSpecialisation(string memory d_id) public view returns(string)
    {
        Doctor_struct memory temp_d=doctorList[d_id];
        return temp_d.doctor_specialisation;
    }

    function getD_Address(string memory d_id) public view returns(string)
    {
        Doctor_struct memory temp_d=doctorList[d_id];
        return temp_d.doctor_address;
    }

    function getNumber(string d_id) public view returns(string)
    {
        Doctor_struct memory temp_d=doctorList[d_id];
        return temp_d.phone_number;
    }

    // function getDoctorDetails(uint d_id) public view returns(string memory)
    // {

    // }


}