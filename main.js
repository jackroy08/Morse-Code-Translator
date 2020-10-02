
let english = [ ' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ];

let morse = [   " ",". ___","___ . . .","___ . ___ .","___ . .",".",". . ___ .","___ ___ .",". . . .",". .",". ___ ___ ___","___ . ___",". ___ . .", "___ ___","___ .","___ ___ ___",". ___ ___ .","___ ___ . ___",". ___ .",". . .", "_",". . ___",". . . ___",". ___ ___","___ . . ___","___ . ___ ___","___ ___ . ." ];


//jacks notes:
//get initial value
//convert text to lower case
 //new variable for translated text
//depending on length of text, peform loop x times

//if initial letters match the one in the array, add it to the new morse code 
function convertETM(){

    let initialtext = document.getElementById("initialtext").value; 

    let newText="";        

    newText=newText.toLowerCase()

    for (let value1=0; value1 < initialtext.length; value1++) {   
                       
        for (let value2=0; value2 < 37; value2++) {

            if (initialtext[value1]==english[value2]) {  //check if letter exists within english array, s
                newText += morse[value2];                //find equiv  morse value
                break;
            }        
        }
    }
    document.getElementById("newText").innerHTML = newText;
}



document.getElementById("translateETM").addEventListener("click", () => convertETM() );

