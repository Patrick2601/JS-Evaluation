let arr=[1,2,[3,4,[5]]]
let res=[]

const  arrflat=(arr)=>{
    return arr.reduce(function(a,b){
        if(Array.isArray(b)){
            return a.concat(arrflat(b))
        }
        return a.concat(b)
    },[])
}

console.log(arrflat(arr))