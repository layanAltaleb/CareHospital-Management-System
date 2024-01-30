
function getLastSunday() {
  const date = new Date();
  const today = date.getDate();
  const currentDay = date.getDay();
  const newDate = date.setDate(today - (currentDay || 7));
  return new Date(newDate);
 

}
   function printSunday(){
    const d= getSunday();
    var month=d.getUTCMonth() + 1;
    var day=d.getUTCDate();
    var year=d.getUTCFullYear();
    var newdate= day + "/" + month + "/" + year;
     document.getElementById("p1").innerHTML="This week started at Sunday: "+ newdate;
     
   }
  
   function getSunday(){
   const today =new Date();
   if (today.getDay() === 0) {
    return today;
   }else{
    return getLastSunday();
    
  
   
    
   }


   }