// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract crowdfunding {  
    mapping (address => uint) public contributers;
    address public manager;
    uint public minimumContribution;
    uint public deadline;
    uint public target;
    uint public raisedAmount;
    uint public noOfContributers;

    struct Request{
        string description;
        address payable recipient;
        uint value;
        bool completed;
        uint noOfVoters;
        mapping (address => bool) voters;
    }
    mapping(uint => Request) requests;
    uint public numRequest;

    constructor(uint _targrt, uint _deadline,uint _minimumContribution) {
        manager = msg.sender;
        target = _targrt;
        deadline = block.timestamp + _deadline;
        minimumContribution = _minimumContribution;
    } 

    modifier onlyOwner() {
       require(manager == msg.sender,"Only manager can call this function");
       _;
    }

    function sendEth() public payable {
        require(msg.value >= minimumContribution,"Not enough funds transfered");
        require(block.timestamp < deadline,"Time has passed");
        // If the contributer mapping is empty with the caller of this function then increase the noOfContributers variable
        if (contributers[msg.sender] == 0){
            noOfContributers++;
        }
        // saving address with the value sent by the caller 
        contributers[msg.sender] += msg.value;
        // Increase the raisedAmount variable with the amount sent with this call 
        raisedAmount += msg.value;
    }
    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function refund() public {
       // we are checking if the time has passed or not, funding should be closed 
        require(block.timestamp > deadline,"CrowdFunding is still open");
        // we are checking if our target has been meet with the raised ammount
        require(raisedAmount > target,"Target doesn't meet right now");
        // we are checking that the caller of this function should have donate something by looking up in contributers mapping
        require(contributers[msg.sender] > 0,"You didn't donate any amount");
        // making a new variable called "user" which is of address type in which we are storing this function caller's address
        address payable user  = payable(msg.sender);
        // in this line we are transfering the amount which is  provided by the caller of this function
        user.transfer(contributers[msg.sender]);
        // in this we are resetting the contributers mapping with the caller address with 0
        contributers[msg.sender] = 0;
    }
    function createRequest(string memory _description,address payable _recipient,uint _value) public{
      // in this line we are creating a new variable called "newRequest" of type struct which is equal to the requests mapping with numRequest as a key
        Request storage newRequest = requests[numRequest];
        // increase numRequest with 1 each time
        numRequest++;
        // filling the struct with parameters
        newRequest.description = _description;
        newRequest.recipient = _recipient;
        newRequest.value = _value;
        newRequest.completed = false;
        newRequest.noOfVoters = 0;
    }

    function voterRequest(uint _requestNo) public {
        // we are checking if the caller donated something or not by looking in our contributers mapping
        require(contributers[msg.sender] > 0,"You are not a contributer to this project");
        // we are creating a new variable of type struct called "thisRequest" in which we are storing our requests mapping with a _requestNo which gives us a struct at that _requestNo
        Request storage thisRequest = requests[_requestNo];
        // we are checking in our thisRequest struct in voters(mapping) by passing msg.sender if the caller alreday voted or not
        require(thisRequest.voters[msg.sender] == false,"You already voted");
        // we are making voter in our thisRequest true
        thisRequest.voters[msg.sender] == true;
        // incresing the noOfVoters in our thisStruct by 1
        thisRequest.noOfVoters++;
    }
    function makePayment(uint _requestNo) public onlyOwner {
        // checking whether our target met or not
        require(raisedAmount > target,"Target doesn't meet right now");
       // we are creating a new variable of type struct called "thisRequest" in which we are storing our requests mapping with a _requestNo which gives us a struct at that _requestNo
        Request storage thisRequest = requests[_requestNo];
        // checking whether our request have already been completed by looking in the completed section it is of bool typee
        require(thisRequest.completed == false,"The request have already been completed");
        // checking whether majority of voters passes this request or not by looking in noOfVoters and noOfContributers 
        require(thisRequest.noOfVoters > noOfContributers/2,"Majority does not support");
        // transfering value to the address which we get from recipient in the struct
        thisRequest.recipient.transfer(thisRequest.value);
        // changing completed to true
        thisRequest.completed == true;
    }


    
}