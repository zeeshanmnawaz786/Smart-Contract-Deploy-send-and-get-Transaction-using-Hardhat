// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract studentRollNo{
    uint counter;
    struct Student{
        string name;
        string fatherName;
    }
    mapping (uint => Student) public studentMapping;

    function addStudentData(uint Id, string memory _name,string memory _fatherName) public{
        studentMapping[Id] = Student(_name, _fatherName);
        counter++;
    }
    function allStudent() public view returns(Student[] memory){

        Student[] memory std= new Student[](counter);
        for (uint i=0; i<counter; i++){
            std[i]=studentMapping[i+1];
        }
        return std;
    }
}