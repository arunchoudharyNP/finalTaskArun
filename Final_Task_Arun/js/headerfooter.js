function header1(){
    var headtext='<header> <div class="container"> <div class="pad-t-b-12 flex-sb-c"> <img src="images/logo.png"> <span id="welcomeUser"> </span> <span id="myBtn">LOGIN</span> </div></div><nav class="khakhi"> <div class="container "> <ul class="navigation-list flex-p"> <li id="navActive" class="hover-nav flex-sb-c pad-l-r-15"><a class="hover-nav navActive pad-t-b-12 " href="#">Main Survey</a></li><li class="hover-nav flex-sb-c pad-l-r-15"><a class="hover-nav pad-t-b-12" href="#">Food & Health</a></li><li class="hover-nav flex-sb-c pad-l-r-15"><a class="hover-nav pad-t-b-12 " href="#">Food Labels & You</a></li><li class="hover-nav flex-sb-c pad-l-r-15"><a class="hover-nav pad-t-b-12 " href="#">Fruits You Eat</a></li><li class="hover-nav flex-sb-c pad-l-r-15"><a class="hover-nav pad-t-b-12 " href="#">Consumption & Expenditure</a></li><li class="hover-nav flex-sb-c pad-l-r-15"><a class="hover-nav pad-t-b-12 " href="#">Veggies You Eat</a></li></ul> </div></nav> </header>';
    document.write(headtext);
}


function footer1(){

    var footerText ='<footer class="dark_grey_bg"><div class="container flex-sb-c pad-t-b-20-30"> <span class="grey-light"> <span class="grey">&copy; copyright 2016 by</span> Center for Science and Environment. All Rights Reserved</span><div> <a href="#"><i class="icons8-facebook"></i></a> <a href="#"><img src="icon/icons8-twitter-circled-24.png" alt="twitter"></a> <a href="#"><img src="icon/icons8-linkedin-circled-24.png" alt="icons8-linkedin-circled-24"></a> <a href="#"><img src="icon/icons8-google-plus-24.png" alt="icons8-google-plus-24"></a> <a href="#"><img src="icon/icons8-pinterest-24.png" alt="icons8-pinterest-24"></a></div></footer>';

    document.write(footerText);
}



function cont(){
    var cont ='<div class=" inline-block p-l-0 .p-t-0 width-45p green-bg font-size-0 h-600 index-1 dp-a" ></div><div class=" inline-block p-r-0 .p-t-0 width-45p form-bg font-size-0 h-600 index-1 dp-a" ></div>';
    document.write(cont);
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
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

