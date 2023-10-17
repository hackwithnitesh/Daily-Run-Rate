
var entry=document.getElementById("entry");
entry.addEventListener("click",displayDetails);

var row=1;


//creating all date present between two date
function getDatesBetween(startDate, endDate) {
    let currentDate = new Date(startDate);
    const lastDate = new Date(endDate);
  
    const datesArray = [];
  
    while (currentDate <= lastDate) {
      datesArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return datesArray;
  }


// daily run rate 
function calculateDailyRunRate(totalRuns, numberOfDays) {
    // Check for division by zero to avoid errors
    if (numberOfDays === 0) {
      return "Number of days cannot be zero.";
    }
  
    const dailyRunRate = totalRuns / numberOfDays;
    return dailyRunRate;
  }
  
  
  


// date present between to 

function displayDetails(){
    var lead=document.getElementById("lead").value;
    var Startdate=document.getElementById("start-date").value;
    var enddate=document.getElementById("end-date").value;
    
    const date=new Date(Startdate);
    
    const month1=date.getMonth()+1;
    const year=date.getFullYear();

    //taking date different between two date
    var date1 = new Date(Startdate);
    var date2 = new Date(enddate);
    var diffDays = date2.getDate() - date1.getDate(); 
    


    //excluding date

    function printDatesBetween(startDate, endDate) {
        let currentDate = new Date(startDate);
        const lastDate = new Date(endDate);
        
        while (currentDate <= lastDate) {
          document.write(currentDate.toDateString());
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
      
      // Example usage:
      const startDate = new Date( Startdate);
      const endDate = new Date(enddate);
      


      //printing all the date between all the date present between two date

      const dateBetween=getDatesBetween(Startdate,endDate);

      // all DRR
      var DRR=calculateDailyRunRate(lead, diffDays);
  

      // current date and time

      const currentDate = new Date();
      
      var update=Startdate +" "+currentDate.getHours() + ":" 
      + currentDate.getMinutes() + ":" + currentDate.getSeconds();


    if(!lead){
        alert("please fill all the boxes");
        return;
    }
    var display=document.getElementById("display");

    var newRow = display.insertRow(row);
 
    var cell1 =newRow.insertCell(0);
    var cell2 =newRow.insertCell(1);
    var cell3 =newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
    var cell6=newRow.insertCell(5);
    var cell7=newRow.insertCell(6);
    var cell8=newRow.insertCell(7);
    var cell9=newRow.insertCell(8);
    var cell10=newRow.insertCell(9);


    
    cell1.innerHTML=row;
    cell2.innerHTML=Startdate;
    cell3.innerHTML=enddate;
    cell4.innerHTML=month1;
    cell5.innerHTML=year;
    cell6.innerHTML= dateBetween;
    cell7.innerHTML=diffDays;
    cell8.innerHTML=lead;
    cell9.innerHTML=DRR;
    cell10.innerHTML=update;
    row++;

    

}