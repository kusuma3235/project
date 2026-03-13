console.log("each number multiply by two")
let val=[1,2,3,4,5]
function array(arr){
    return arr.map(function(num){
        return num*2
    })
}
let multiply=array(val)
console.log(multiply)