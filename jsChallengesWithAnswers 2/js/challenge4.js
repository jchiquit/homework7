$(document).ready(function(){
  $('#ch4form').submit(function(){
    var validInput = true;
    var name = $("#fullname").val()
    var address = $("#streetaddr").val()
    var nameerror = $("#nameerrormsg")
    var streeterror = $("#addrerrormsg")
    if (name==0){
      // look at challenge1
      	nameerror.css("display", "block");
        validInput = false;}
    else{
      nameerror.css("display", "none");}
    if (address==0){
        // look at challenge1
          streeterror.css("display", "block");
          validInput = false;}
    else{
      streeterror.css("display", "none");}

    return validInput;
})
})








// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }
