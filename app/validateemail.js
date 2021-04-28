
var validemail =  function(input){
    let reg = new RegExp("^[a-zA-Z]{1,254}@[a-zA-Z]{1,254}\.[a-zA-Z]{2,5}$")
    return reg.test(input)

}

module.exports = validemail