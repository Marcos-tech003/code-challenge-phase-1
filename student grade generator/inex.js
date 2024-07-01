function calculation(){
  //validation of student grade calculation input
   
  const StudentMarks=promt("enter StudentMarks(0-100):");
    //conditions for the calculation
if(StudentMarks=>80){
    console.log ("grade:A");
}else if(Marks>=60){
    console.log("grade:B");   
}else if(Marks>=50){
    console.log("grade:C");
}else if(Marks>=40){
    console.log("grade:D");
}else if(Marks<=39){
    console.log("grade:E");
}
}  


 