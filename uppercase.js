console.log("sentence in uppercase")
let sent=["girls"," are"," beautiful"]
function shout(hash){
    return hash.map(function(word){
        return word.toUpperCase()
    })
}
let result=shout(sent)
console.log(result)