function myFunction(){
    var x = document.getElementById("myTopnav");
    if(x.className === "topnav"){
        x.className += " responsive"; //topnav resposive
    }else{
        x.className = "topnav";
    }
}