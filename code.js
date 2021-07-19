// Karsten Koch 
// http://www.aufgang.org/koch


//button preloader
btn1= new Image();
btn1.src = "img/menu1.png"
btn1_hot= new Image();
btn1_hot.src = "img/menu1_hot.png"

btn2= new Image();
btn2.src = "img/menu2.png"
btn2_hot= new Image();
btn2_hot.src = "img/menu2_hot.png"

btn3= new Image();
btn3.src = "img/menu3.png"
btn3_hot= new Image();
btn3_hot.src = "img/menu3_hot.png"

btn4= new Image();
btn4.src = "img/menu4.png"
btn4_hot= new Image();
btn4_hot.src = "img/menu4_hot.png"

readmore= new Image();
readmore.src = "img/readmore.png"
readmore_hot= new Image();
readmore_hot.src = "img/readmore_hot.png"

loginbtn= new Image();
loginbtn.src = "img/loginbutton.gif"
loginbtn_hot= new Image();
loginbtn_hot.src = "img/loginbutton_hot.gif"

menubg= new Image();
menubg.src = "img/menubg.png"
menubgsel= new Image();
menubgsel.src = "img/menubgsel.png"
submenu01= new Image();
submenu01.src = "img/submenu01.jpg"
submenu02= new Image();
submenu02.src = "img/submenu02.jpg"
submenu03= new Image();
submenu03.src = "img/submenu03.jpg"
submenu04= new Image();
submenu04.src = "img/submenu04.jpg"
submenu05= new Image();
submenu05.src = "img/submenu05.jpg"
submenu06= new Image();
submenu06.src = "img/submenu06.jpg"
submenu07= new Image();
submenu07.src = "img/submenu07.jpg"
submenu08= new Image();
submenu08.src = "img/submenu08.jpg"

readmore= new Image();
readmore.src = "img/readmore.png"
readmore_hot= new Image();
readmore_hot.src = "img/readmore_hot.png"


// IPhone IPad detection
var iphonepad = ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)));

// Client Login Form Keypress Submitter
function submitenter(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
   {
   myfield.form.submit();
   return false;
   }
else
   return true;
}

function closeMenus()
{
  closeMenu1();
  closeMenu2();
}
function openMenu1()
{  document.getElementById('Menu1').style.display='block';
   document.getElementById('Menu1Button').src=btn1_hot.src;
   m1over=true;
}
function closeMenu1()
{  
    document.getElementById('Menu1').style.display='none';
    document.getElementById('Menu1Button').src=btn1.src;
}
function openMenu2()
{  document.getElementById('Menu2').style.display='block';
   document.getElementById('Menu2Button').src=btn2_hot.src;
}
function closeMenu2()
{  document.getElementById('Menu2').style.display='none';
   document.getElementById('Menu2Button').src=btn2.src;
}
function openMenu3()
{  
   document.getElementById('Menu3Button').src=btn3_hot.src;
}
function closeMenu3()
{  
   document.getElementById('Menu3Button').src=btn3.src;
}
function openMenu4()
{  
   document.getElementById('Menu4Button').src=btn4_hot.src;
}
function closeMenu4()
{  
   document.getElementById('Menu4Button').src=btn4.src;
}
