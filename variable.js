/* 
    hoisting : hoisting in general means to lift up
    -> In javaScript it means that we declare the variables 
    in the end and use it in the rest of the program.
    -> Like for example I used hoisting in the varfunction() in which 
        I explain that we declared and initialize the variable in the end 
        but still access in the whole program. In javascript we can do that.


*/

/*  
    Let is keyword used to declare variables as local or you can say that can use within scope
    If we try to use outside the scope it will give error like not declared variable
    Let variables are used in nowadays programming because you can use these within scope
*/

// Message Function is for Let keyword


function Messages()
{
    let condition=true;
    let msg1="Welcome ";
    let msg2="Bilawal";
    if (condition){
        let msg3=" Hussain";
        console.log(msg1+msg2+msg3);
    }
    //console.log(msg1+msg2+msg3);
    //we cannot use msg3 out of scope of if condition because the variable is let 
    //Thats why I used comment on line 23
}

/*
    const keyword is used to declare variables whose values can never be changed like 
    PI = 3.142 or may be like Identity Card you can never change that 
    The thing that I want to tell that we cannot re assign value in those variables

*/

// ConstantFunction is for const
function ConstantFunction()
{
    const Pi=3.142;
    //Pi=5;         // we cannot update the values in const variables
    console.log(Pi);
}

/*
    var is the keyword used to make variables available for whole program like if you 
    declared a var type variable you can access it within and outside the scope so 
    its bad for us to use it because it make us difficult to understand the errors
*/

// VarFunction is for Var
function VarFunction()
{
    if(true)
    {
       
        if (true)
        {
            var outputMessage="welcome User";
            console.log(outputMessage);
        }
        outputMessage="Welcome ADMIN";
        console.log(outputMessage);
        console.log(welcomeNote);
    }
    outputMessage="Bye";
    welcomeNote="Bye TakeCare";
    console.log(outputMessage);
    console.log(welcomeNote);
    var welcomeNote="WELCOME";          // I declared and initialize this variable in the end to give example of hoisting
}


Messages();
ConstantFunction();
VarFunction();