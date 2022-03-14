const calculateTemp = () =>{
    const tempVal = document.getElementById('temp').value;
    const temdef = document.getElementById('temp_deff')
    const temTyep = temp_deff.options[temdef.selectedIndex].value

    const celtoFeh = (cel) =>{
        let ferenheit = Math.round((cel * 9/5) + 32)
        return ferenheit;
    }
    const fehtoCel = (fer) =>{
        let calsius = Math.round((cel -32) * 5/9)
        return calsius;
    }
    let result;

    if(temTyep == 'cel'){
        result = celtoFeh(tempVal)
        document.getElementById('resultContainer').innerHTML = ` = ${result} Celcius`
    }else{
        result = fehtoCel(tempVal)
        document.getElementById('resultContainer').innerHTML = ` = ${result} fahrenheit`
    }
}