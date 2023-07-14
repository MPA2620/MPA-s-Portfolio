var input = document.getElementById('From');
var result = document.getElementById('To');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

//Adding Listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
function myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    console.log('result', inputTypeValue, resultTypeValue);

    if (inputTypeValue === 'celsius' && resultTypeValue === 'fahrenheit'){
        result.value = (Number(input.value) * 9/5) +32;
    }else if (inputTypeValue === 'fahrenheit' && resultTypeValue === 'celsius'){
        result.value = ((Number(input.value) - 32) * 5/9);
    }else if (inputTypeValue === 'meters' && resultTypeValue === 'feet'){
        result.value = (Number(input.value) * 3.28);
    }else if (inputTypeValue === 'feet' && resultTypeValue === 'meters'){
        result.value = (Number(input.value) * 0.304);
    }else if (inputTypeValue === 'centimeters' && resultTypeValue === 'inch'){
        result.value = (Number(input.value) * 0.393);
    }else if (inputTypeValue === 'inch' && resultTypeValue === 'centimeters'){
        result.value = (Number(input.value) * 2.54);
    }else if (inputTypeValue === 'celsius' && resultTypeValue === 'celsius'){
        result.value = input.value;
    }else if (inputTypeValue === 'fahrenheit' && resultTypeValue === 'fahrenheit'){
        result.value = input.value;
    }else if (inputTypeValue === 'meters' && resultTypeValue === 'meters'){
        result.value = input.value;
    }else if (inputTypeValue === 'feet' && resultTypeValue === 'feet'){
        result.value = input.value;
    }else if (inputTypeValue === 'centimeters' && resultTypeValue === 'centimeters'){
        result.value = input.value;
    }else if (inputTypeValue === 'inch' && resultTypeValue === 'inch'){
        result.value = input.value;
    }else if (inputTypeValue === 'meters' && resultTypeValue === 'centimeters'){
        result.value = Number(input.value) * 100;
    }else if (inputTypeValue === 'meters' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 39.26;
    }else if (inputTypeValue === 'inch' && resultTypeValue === 'meters'){
        result.value = Number(input.value) * 0.0254;
    }else if (inputTypeValue === 'centimeters' && resultTypeValue === 'meters'){
        result.value = Number(input.value) / 100;
    }else if (inputTypeValue === 'feet' && resultTypeValue === 'centimeters'){
        result.value = Number(input.value) * 30.48;
    }else if (inputTypeValue === 'centimeters' && resultTypeValue === 'feet'){
        result.value = Number(input.value) * 0.0328;
    }else if (inputTypeValue === 'inch' && resultTypeValue === 'feet'){
        result.value = Number(input.value) * 0.0833;
    }else if (inputTypeValue === 'feet' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 12;
    }else {
        result.value = null;
    }
}