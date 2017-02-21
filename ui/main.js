var button=document.getElementById('counter');
var counter=0;
button.onclick=function()
{
    var requset= new XMLHttpRequest();
    requset.onreadystatechange=function()
    {
        if(request.readystate===XMLHttpRequest.DONE)
    {
        if(request.status===200)
        {
            var counter=request.respopnseText;
            var span =document.getElementById('count');
span.innerHTML=counter.toString();
        }
    }
    }
    request.open('GET','http://parvpatni.imad.hasura-app.io/counter',true);
    request.send(null);

};