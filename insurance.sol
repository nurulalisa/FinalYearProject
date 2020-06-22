pragma solidity ^0.5.0;

contract Contract {
    
    struct customer {
        address custAddress; 
        string custName;
    }
    
    mapping ( uint => customer) private customers; //cust register
    
    address creator;
    modifier onlyIfCreator {
        if (msg.sender == creator) _;
    }
    
    event custAdded (address customer);
    
    function newIncomingReq (
        
        address _custAddress,
        string memory _custName,
        uint membersNumb
        ) public {
            customer memory c;
        }
        
        function custOption (
            uint membersNumb
            ) public view returns (string memory) {
                
                {if (membersNumb < 2 )
                return 'Personal Insurance';
            } if (membersNumb > 1 ) {
                return 'Family Insurance';
            }

            }
    
}
