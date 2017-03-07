var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];
convertEmployees(employees);

function convertEmployees(array) {
  for (var i = 0; i < array.length; i++) {
    var newEmployeeArray = newEmployee(array[i]);
    console.log(newEmployeeArray);
  }
}

function newEmployee(employeeArray){
  var resultArray = [];
  //constructor for new employee array
 resultArray.push(employeeArray[0]);
 resultArray.push(bonusPercent());
  // this.annualcomp = annualComp;
  // this.totalbonus = totalBonus;
  //Figures out employee bonus percentage

  function bonusPercent(){
    var employeeBonus = 0;
    if(employeeArray[3]==5){
      employeeBonus += '.10';
    } else if (employeeArray[3]==3) {
      employeeBonus += '.04';
    } else if (employeeArray[3]==4) {
      employeeBonus += '.06';
    } else {
      employeeBonus += 0;
    }

      function bonusAdded(){
        if(employeeArray[1].length==4){
      employeeBonus += '.05';
    }
  }
    if(employeeArray[2]>65000)
    {
      employeeBonus -= '.01';
    }

    if(employeeBonus > '.13')
    {
      employeeBonus = '.13';
    }
    else if (employeeBonus < 0) {
      employeeBonus = 0;
    }
    return employeeBonus;

  }


//figures out the total bonus
  var totalBonus = function totalBonus(){
    var totalBonus = parsInt(employeeBonus*employeeArray[2]);
    return totalBonus;
  };

//figures out annual compensation
  var annualComp = function totalComp(){
    var total = (totalBonus+employeeArray[2]);
  };

  return resultArray;
}
