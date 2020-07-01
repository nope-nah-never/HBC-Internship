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
// })



$(document).ready(function (){
  $("body").mouseleave(function (){
    // var subch1=getCookie("subch1");
    if (!document.cookie.split('; ').find(row => row.startsWith('subch1'))) {
      $("#exampleModal").modal("show");
      document.cookie="subch1=vis; expires=Fri, 31 Dec 9999 23:59:59 GMT";
       // setCookie("subch1","vis", 2);
    } else {
         console.log("YAY!! You're already a subscriber!!");

    }
  });
});

  // function setCookie(cname,cvalue,exdays) {
  //   var d = new Date();
  //   d.setTime(d.getTime() + (exdays*60*1000));
  //   var expires = "expires=" + d.toGMTString();
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // }

  // function getCookie(cname) {
  //   var name = cname + "=";
  //   var decodedCookie = decodeURIComponent(document.cookie);
  //   var ca = decodedCookie.split(';');
  //   for(var i = 0; i < ca.length; i++) {
  //     var c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }
