pragma solidity ^0.5.0;
// SPDX-License-Identifier:UNLICENSED
contract Contract {

  struct Form {
   uint icNumb;
   string name;
   uint member;
  }
  event FormRecorded (
   uint icNumb,
   string name,
   uint member
   );

  mapping(uint => Form) public forms;

  function newForm (
      uint _icNumb,
      string memory _name,
      uint _member
      ) public {

    forms[_icNumb] = Form (_icNumb, _name, _member);
    emit FormRecorded (_icNumb, _name, _member);
  }

}
