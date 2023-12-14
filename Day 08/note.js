var num1= prompt ("enter first number: ");
var num2= prompt ("enter Second number: ");

//for parseInt = full number like-> 10, 12, 50, 100 and so on.
//for parseFloat = desimel number like-> 10.5, 12.80, 100.98 and so on.

num1 = parseFloat(num1,10);
num2 = parseInt (num2,10);

var sum,sub;

sum= num1+num2;

sub= num1-num2;

document.write("sum = " +sum +"<br/>");

document.write("sub = " +sub );

// here shown user input with output.
 
document.write( f1 + " + " + f2 + " = "+sum +"<br>");
document.write( f1 + " - "  + f2 + " = " + sub +"<br>");
document.write ( f1 +" * " + f2 + " = " + ass + "<br>" );
document.write ( f1+ " / " + f2 + " = " + div + "<br>" );
document.write ( f1+ " % " +f2 + " = " + per);


// here shown only user output.

document.write("sub ="+sub +"</br>");
document.write("ass ="+ass +"</br>");
document.write("div ="+div +"</br>");
document.write("per ="+per +"</br>");

