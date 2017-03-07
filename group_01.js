var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];
var employees = [atticus, jem, boo, scout, robert, mayella];

function convertEmployees(initialArray)
{
  for(var i = 0; i < initialArray.length; i++)
  {
    singleEmployeeArray = initialArray[i];
    singleEmployeeArray[1] = calculatedEmployee(initialArray[i]);
    singleEmployeeArray[2] = secondStep(initialArray[i]);
    singleEmployeeArray[3] = thirdStep(initialArray[i]);
    console.log(singleEmployeeArray);
  }
}

function calculatedEmployee(singleEmployeeArray)
{
  var bonusPercent = 0;
  if(singleEmployeeArray[3] == 5)
  {
    bonusPercent += 0.1;
  }
  else if (singleEmployeeArray[3] == 4)
  {
    bonusPercent += 0.06;
  }
  else if (singleEmployeeArray[3] == 3)
  {
    bonusPercent += 0.04;
  }

  if(singleEmployeeArray[1].length > 3)
  {
    bonusPercent += 0.05;
  }

  if(singleEmployeeArray[2] > 65000)
  {
    bonusPercent -= 0.01;
  }

  if(bonusPercent > 0.13)
  {
    bonusPercent = 0.13;
  }
  else if (bonusPercent < 0)
  {
    bonusPercent = 0;
  }
  return bonusPercent;
}

function secondStep(initialArray)
{return (parseInt((singleEmployeeArray[1]+1)*initialArray[2]));}

function thirdStep(initialArray)
{return (parseInt((singleEmployeeArray[1]*initialArray[2])));}

convertEmployees(employees);
