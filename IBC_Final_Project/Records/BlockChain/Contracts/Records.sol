pragma solidity ^0.4.17;

contract Records{
    
    mapping(string => record) rec_list; 
    address public r_owner;
           
    modifier restricted() {
        require(msg.sender==r_owner);
        _;
    }

    function Records() public{
        r_owner=msg.sender;
    }

    struct record{

        string r_id;        //record id
        string p_id;        //patient id
        string d_id;        //doctor id
        string pers_hist;   //Personal medical history
        string issue;       //Issue/Use Case
        string visits;      //No. of visits for respective issue
        string diag;        //diagnosis
        string startDate;   //Start date of respective issue
    }
    record _rec;
    
   

    function getRecordIssue(string memory r__id)public view returns (string memory){
              
        record memory rec = rec_list[r__id];
        return (rec.issue);              
    }
    function getRecordDiag(string memory r__id)public view returns (string memory){
              
        record memory rec = rec_list[r__id];
        return (rec.diag);              
    }

    function getRecordHist(string memory r__id)public view returns (string memory){
              
        record memory rec = rec_list[r__id];
        return (rec.pers_hist);              
    }
    
    function addRecord(string memory r__id, string memory p__id, string memory d__id, string memory _pers_hist,string memory _issue, string memory _visits, string memory _diag, string memory _startDate) public restricted {
              
        _rec.r_id = r__id;
        _rec.p_id = p__id;
        _rec.d_id = d__id;
        _rec.pers_hist = _pers_hist;
    
        _rec.issue = _issue;
        _rec.visits = _visits;
        _rec.diag = _diag;
        _rec.startDate = _startDate;
        
        rec_list[r__id] = _rec;
          
    }
    
    
}