function clock()
{
    var date=new Date();
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var day=date.getDay()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>13)
        {
            hh-=12
        }
    }
    if(hh==0)
    {
        hh=12
    }
    var fullTime=`${hh}:${mm}:${ss} ${am_pm}`
    document.getElementById("Time").innerHTML=fullTime
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="Jul"
    }
    else if (mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)

    {
        mo="oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else(mo==11)
    {
        mo="Dec"
    }
    var fullDate=`${dd}/${mo}/${yy}`
    document.getElementById("date").innerHTML=fullDate
    switch(day)
    {
        case 0:
        day="sunday"
        document.body.style.backgroundImage="url(bg2.jpg)"
        break;
        case 1:
        day="monday"
        document.body.style.backgroundImage="url(bg3.jpg)"
        break;
        case 2:
        day="tuesday"
        document.body.style.backgroundImage="url(bg4.jpg)"
        break;
        case 3:
        day="wednesday"
        document.body.style.backgroundImage="url(bg5.jpg)"
        break;
        case 4:
        day="thursday"
        document.body.style.backgroundImage="url(bg6.jpg)"
        break;
        case 5:
        day="friday"
        document.body.style.backgroundImage="url(bg7.jpg)"
        break;
        case 6:
        day="saturday"
        document.body.style.backgroundImage="url(bg8.jpg)"
        break;

    }
    document.getElementById("day").innerHTML=day
    document.getElementById("sec").innerHTML=ss
    var updateTheTime=setTimeout(clock,1000)
}
function greet()
{
    var date=new Date()
    var hh=date.getHours()
    if(hh>=6&&hh<=12)
    {
        document.getElementById("greetMassage").innerHTML="good morning"
        document.getElementById("bgVid").src=""
    }
    else if(hh>12&&hh<=16)
    {
        document.getElementById("greetMassage").innerHTML="good afternoon"
        document.getElementById("bgVid").src=""
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="100px"
    }
    else if(hh>16&&hh<=20)
    {
        document.getElementById("greetMassage").innerHTML="good evening"
        document.getElementById("bgVid").src=""
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="100px"
    }
    else
    {
        document.getElementById("greetMassage").innerHTML="good night"
        document.getElementById("bgVid").src=""
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="100px"
    }
}greet()
function closeWind()
{
    document.getElementById("greet").style.display="none"
}
var a=setTimeout(closeWind,5000)