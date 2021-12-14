pragma solidity ^0.4.17;
contract Hospital{
    address public healthDept;
    uint public numHospitals;

    modifier restricted() {
        require(msg.sender==healthDept);
        _;
    }

    function Hospital() public{
        healthDept=msg.sender;
        numHospitals=0;
    }

    struct Hospital_struct {
        string name;
        string hospital_type;
        string hospital_address;
        string phone_number;
    }

    Hospital_struct h;

    mapping(string=>Hospital_struct) hospitalList;

    function addHospital(string memory h_id, string h_name, string h_type, string h_address, string p_number) public restricted {
        h.name=h_name;
        h.hospital_type=h_type;
        h.hospital_address=h_address;
        h.phone_number=p_number;

        hospitalList[h_id]=h;
        numHospitals++;
    }


    function getName(string memory h_id) public view returns(string)
    {
        Hospital_struct memory temp_h=hospitalList[h_id];
        return temp_h.name;
    }

    function getType(string memory h_id) public view returns(string)
    {
        Hospital_struct memory temp_h=hospitalList[h_id];
        return temp_h.hospital_type;
    }

    function getH_Address(string memory h_id) public view returns(string)
    {
        Hospital_struct memory temp_h=hospitalList[h_id];
        return temp_h.hospital_address;
    }

    function getNumber(string memory h_id) public view returns(string)
    {
        Hospital_struct memory temp_h=hospitalList[h_id];
        return temp_h.phone_number;
    }

    // function getHospitalDetails(string h_id) public view returns(string memory)
    // {
    //     Hospital_struct memory temp_h=hospitalList[h_id];
    //     return temp_h.name;
    // }


}