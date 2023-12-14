
// here user give data by prompt.
var f1= prompt ("Enter Your First Number");
var f2= prompt ("Enter Your Second Number");
// here number convert veritis type.
f1= parseFloat (f1,10);
f2 = parseFloat (f2,10);
// here took all variable togther.
var sum,sub,ass,div,per;
// here divide all veriable veriatis function.
sum =f1+f2;
sub =f1-f2;
ass = f1*f2;
div =f1/f2;
per = f1%f2;

// here print (output) final data.

document.write( f1 + " + " + f2 + " = "+sum +"<br>");
document.write( f1 + " - "  + f2 + " = " + sub +"<br>");
document.write ( f1 +" * " + f2 + " = " + ass + "<br>" );
document.write ( f1+ " / " + f2 + " = " + div + "<br>" );
document.write ( f1+ " % " +f2 + " = " + per);






/* document.write("sub ="+sub +"</br>");
document.write("ass ="+ass +"</br>");
document.write("div ="+div +"</br>");
document.write("per ="+per +"</br>"); */
