$(document).ready(function(){
  $('#ch3form').submit(function(){
    let standing = $('input[name="standing"]');
    // :checked is for checkboxes
    if (standing.is(":checked")){
      return true
    }
    else{
      alert("standing");
        return false;
    }
  })
  $('#ch3form').submit(function(){
    let fruit = $('input[name="fruit"]');
    if (fruit.is(":checked")){
      return true
    }
    else{
      alert("pick a fruit bitch!");
        return false;
    }
  })

})


// ch3form.onsubmit = function() {
//     var fruit =
//     document.querySelectorAll('input[name="fruit"]')
//
//
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//
//     alert("You must pick a fruit!")
//     return false;
//
//
//
//
//
//     // Advanced Answer
//     // if(document.querySelector('input[name="fruit"]:checked'))
//     //     return true;
//
//     // alert("You must pick a fruit!")
//     // return false;
//   }
