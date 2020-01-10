
//targets
const clockText = document.querySelector(".clock b em")
const clockBtn = document.querySelector(".clock b i")
const clockBox = document.querySelector(".clock")
const registerBtn = document.querySelectorAll(".register")
//send to register
registerBtn.forEach((x)=>{
    x.onclick=()=>{location.href=' https://chefportfoliobw1.netlify.com/register'}
})
//START OF CLOCK CLASS
class Clock{//clock class to request full time 
constructor(year,month,day,date,pod,hour,min,fullDate){
//full time constructor funciton
this.fullDate = new Date()
//get year
this.year=()=>{return this.fullDate.getFullYear()}
//get month an convert to english name
this.month=()=>{
var a = this.fullDate.getMonth()
switch(a){
case 0:return 'Jan';case 1:return 'Feb';case 2:return 'March';
case 3:return 'April';case 4:return 'May';case 5:return 'June';
case 6:return 'July';case 7:return 'Aug';case 8:return 'Sep';
case 9:return 'Oct';case 10:return 'Nov';case 11:return 'Dec';
}
}
//get day an convert to english name
this.day=()=>{
var a = this.fullDate.getDay()
switch(a){
case 0:return 'Sun';case 1:return 'Mon';case 2:return 'Tue';
case 3:return 'Wed';case 4:return 'Thu';case 5:return 'Fri';
case 6:return 'Sat';
}
}
//get date number of the day for current month
this.date=()=>{return this.fullDate.getDate()}
//get hour and covert to standard non military time
this.hour=()=>{
if(this.fullDate.getHours() % 12===0) 
return 12
else
return this.fullDate.getHours() % 12
}
//get minutes and convert to double digit display
this.min=()=>{
var a = this.fullDate.getMinutes()
if(JSON.stringify(a).length<2){
return '0'+a
}else{
return a
}
}
//end of constructor

}
//get the part of day due to the live current time
pod=()=>{
var a = this.fullDate.getHours()
if(a>0 && a<=11 ){
return 'am'
}else if(a>=12 && a<=23){
return 'pm'
}else{
return 'am'
}
}

//END OF CLOCK CLASS
}


//FUNCTION TO SHOW TIME
const shwTime=(a)=>{
let time = new Clock

//white shade the background for easier reading
clockBox.style=`
background-color:rgba(250,250,250,.5);
`
//display full time and info
clockText.innerHTML=`${time.day()} ${time.hour()}:${time.min()}${time.pod()}, ${time.month()} ${time.date()} ${time.year()} `

//at the end of the 10 second timer display the clickable clock only, as before.
setTimeout(()=>{
clockText.innerHTML=``
clockBox.style=`
background-color:"";
`
},10000)
}
//FUNCTION TO SHOW TIME

//button to show the time/call function above (the clock icon)
clockBtn.setAttribute("onclick", "shwTime(this)")

//FUNCTION TO SHOW ANOTHER ROW OF THE TEAM
async function skipRow(){

/*if its on the first row show the second row 
and change the 'data' attribute in the buttons tag to 'row2' 
to determine the row its displaying
...this creates the simple flipping back and forth loop.*/

if(abtRow.getAttribute("data")==='row1'){
try{
abtRow.innerHTML=`
<!-- one -->
<div class="container cardio">
<div class="img-container"><span class="titlez_">Chelsea</span>
<img src="img/chelsea.png" alt="">
</div>
<ul class="social-media ">
<li><a ><i class="fab fa-react"></i></a></li>
<li><a ><i class="fab fa-js"></i></a></li>
<li><a href="https://github.com/chelsabeth"><i class="fab fa-github"></i></a></li>
</ul>
<div class="user-info cardioTxt">
<span class="cardioTxt"> <span> <img src="img/frontend.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> FrontEnd Developer
<br /> I am a full-stack web developer student & cat mom. &#128421; &#128570; </span>
</div>
</div>
<!-- two -->
<div class="container cardio">
<div class="img-container"><span class="titlez_">Aeson</span>
<img src="img/aj.png" alt="">
</div>
<ul class="social-media ">
<li><a ><i class="fab fa-react"></i></a></li>
<li><a ><i class="fab fa-js"></i></a></li>
<li><a href="https://github.com/AesonJohnson"><i class="fab fa-github"></i></a></li>
</ul>
<div class="user-info cardioTxt">
<span class="cardioTxt"> <span> <img src="img/frontend.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> FrontEnd Developer
<br /> My dream is to someday win a lifetime supply of, like, really good cheese</span>
</div>
</div>

<!-- three -->
<div class="container cardio">
<div class="img-container"><span class="titlez_">Nadeem</span>
<img src="img/nadeem.jpeg" alt="">
</div>
<ul class="social-media ">
<li><a ><i class="fab fa-node-js"></i></a></li>
<li><a ><i class="fab fa-js"></i></a></li>
<li><a href="https://github.com/NadeemAnvaritafti"><i class="fab fa-github"></i></a></li>
</ul>
<div class="user-info cardioTxt">
<span class="cardioTxt"> <span> <img src="img/backend.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> BackEnd Developer
<br /> I like sports and hope Luka takes us to the promised land.</span>
</div>
</div>
<!-- end of 3 card row -->

`

abtRow.setAttribute("data", "row2")
}
catch(err){
throw new Error(err)
}
}else{

try{
abtRow.innerHTML=`
<!-- one -->

<div class="container cardio">

<div class="img-container"> <span class="titlez_">Guy</span>
<img src="img/me.jpg" alt="">
</div>
<ul class="social-media ">
<li><a ><i class="fab fa-html5"></i></a></li>
<li><a ><i class="fab fa-less"></i></a></li>
<li><a ><i class="fab fa-css3"></i></a></li>
<li><a ><i class="fab fa-js"></i></a></li>
<li><a href="https://github.com/guytonoriji"><i class="fab fa-github"></i></a></li>
</ul>
<div class="user-info cardioTxt">
<span class="cardioTxt"><span> <img src="img/ui.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> UI Developer
<br>UFC fan,thinking about bulding a UFC top fighters Website.</span>
</div>
</div>
<!-- two -->
<div class="container cardio">
<div class="img-container"><span class="titlez_">Daquan</span>
<img src="img/daquan.jpeg" alt="">
</div>
<ul class="social-media ">
<li><a ><i class="fab fa-html5"></i></a></li>
<li><a ><i class="fab fa-less"></i></a></li>
<li><a ><i class="fab fa-css3"></i></a></li>
<li><a ><i class="fab fa-js"></i></a></li>
<li><a href="#"><i class="fab fa-github"></i></a></li>
</ul>
<div class="user-info cardioTxt">
<span class="cardioTxt"> <span> <img src="img/ui.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> UI Developer</span>
</div>
</div>

<!-- three -->
<div class="container cardio">
<div class="img-container"><span class="titlez_">Cobe</span>
<img src="img/cobe.jpeg" alt="">
</div>
<ul class="social-media ">
<li><a ><i class="fab fa-react"></i></a></li>
<li><a ><i class="fab fa-js"></i></a></li>
<li><a href="https://github.com/CoBe18"><i class="fab fa-github"></i></a></li>
</ul>
<div class="user-info cardioTxt">
<span class="cardioTxt"> <span> <img src="img/frontend.png" width="30" height="30" style="border-radius: 100%;margin-bottom:5px;" alt=""></span> FrontEnd Developer</span>
</div>
</div>
<!-- end of 3 card row -->

`

abtRow.setAttribute("data", "row1")

}

catch(err){
throw new Error(err)
}

}

}
//FUNCTION TO SHOW ANOTHER ROW OF THE TEAM


