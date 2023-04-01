    
let BTN =document.getElementById('btn')
BTN.addEventListener('click', () => {
var height = (document.getElementById('height').value)
var weight = (document.getElementById('Weight').value)
const result = document.getElementById('output')

let H_status=false , W_status=true;

if(height === '' || isNaN(height) || (height<=0)){


    document.getElementById('height_error').innerHTML = " Please provide a valid height"
}
 else{
    document.getElementById('height_error').innerHTML = ""
    H_status=true

}


if(weight === '' || isNaN(weight) || (weight<=0)){


    document.getElementById('weight_error').innerHTML = " Please provide a valid weight"
}
 else{
    document.getElementById('weight_error').innerHTML = ""
    W_status=true;

}

if(H_status && W_status){
    const bmi = (weight/ ((height* height)/10000)).toFixed(2)

    if(bmi<18.6){
        result.innerHTML = " Under weight : "+ bmi;
    }
    else if( bmi>=18.6 && bmi< 24.9)
    {
        result.innerHTML =" Normal : "+ bmi;
    }
    else{
        result.innerHTML = " Over weight : "+bmi;
    }
}else{
    alert(" The form has errors");
    result.innerHTML = ''
}
});

