


const maintext = document.getElementById("textbox");
const celtofarenheit = document.getElementById("tofarenheit"); 
const fartocelsius = document.getElementById("tocelsius"); 
const result = document.getElementById("result");

let temp;

function convert(){
    
    if(celtofarenheit.checked){

        temp = Number(maintext.value);
        temp = temp * 9/5 +32;
        result.textContent = temp.toFixed(2) + "F";

    }else if(fartocelsius.checked){

        temp = Number(maintext.value);
        temp = (temp - 32)*5/9;
        result.textContent = temp.toFixed(2)+ "C";

    }else{
        result.textContent = "Please Select a Unit :)"
    }
        

    
}