//Counter code
var button=document.getElementById('counter');
var counter=5;
button.onclick = function(){
    //Make a request to the counter end point
    // Capture the response and store it in a variable
    // render the variable in correct span
    
    counter=counter+1;
    var span= document.getElementById('count');
    span.innerHTML= counter.toString(); 
    
};
