
var replacechar = function(input) {
    let round_a = input.replace("'", "-")
    let round_b = round_a.replace("/", "-")
    let round_c = round_b.replace("<", "-")
    let round_d = round_c.replace(">", "-")
    return round_d
}

module.exports = replacechar
