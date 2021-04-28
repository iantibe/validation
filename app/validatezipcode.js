
var validzip = function(input){

    let response = true

    if(input.length !== 5){
        response = false
    }

    for(let x = 0; x < input.length; x++){
        if(isNaN(input[x])){
            response = false
        }
    }

    if(input === "99999"){
        response = false
    }

    return response
}

module.exports = validzip