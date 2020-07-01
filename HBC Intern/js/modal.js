const submitbtn= document.querySelector(".submit-btn");
$(document).ready(function (){
  $("body").mouseleave(function (){
    var subch=getCookie("subch");
    if (subch != "") {
      console.log("YAY!! You're already a subscriber!!");
    } else {

       $("#exampleModal").modal("show");
        setCookie("subch","vis", 2);
    }
  });
  submitbtn.onclick = function (){sendJSON()};




  function sendJSON(){
        let result = document.querySelector('.result');

        let email = document.querySelector('#mail-input');

        // Creating a XHR object
        let xhr = new XMLHttpRequest();
        let url = "../php/modal_submit.php";

        // open a connection
        xhr.open("POST", url, true);

        // Set the request header i.e. which type of content you are sending
        xhr.setRequestHeader("Content-Type", "application/json");

        // Create a state change callback
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {

                // Print received data from server
                result.innerHTML = this.responseText;

            }
        };

        // Converting JSON data to string
        var data = JSON.stringify({ "email": email.value });

        // Sending data with the request
        xhr.send(data);
    $("#exampleModal").modal("hide");
  }
})



function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}











// const submitbtn= document.querySelector(".submit-btn");
// $(document).ready(function (){
//   $("body").mouseleave(function (){
//     if(document.cookie.length!=0)
// {
//   alert("YAY!! You're already a subscriber!!");
// }
// else
// {
//     $("#exampleModal").modal("show");
//
// }
//   });
//   submitbtn.onclick = function (){submitfn()};
//   function submitfn(){
//     var email= document.getElementById("mail-input").value;
//     document.cookie="email=" + email +";";
//     $("#exampleModal").modal("hide");
//   }
// })







// const exmodal=document.querySelector("#exampleModal");
// const launchbtn= document.querySelector(".examBtn");
// const submitbtn= document.querySelector(".submit-btn");
// launchbtn.onclick = function (){showModal()};
// submitbtn.onclick = function (){submitfn()};
// function showModal(){
//   if(document.cookie.length!=0)
//   {
//     alert("YAY!! You're already a subscriber!!");
//   }
//   else
//   {
//       $("#exampleModal").modal("show");
//
//   }
// }
// function submitfn(){
//   var email= document.getElementsByClassName("mail-input").value;
//   document.cookie="email=" + email +";";
//   $("#exampleModal").modal("hide");
// }
















console.log(document.cookie);
