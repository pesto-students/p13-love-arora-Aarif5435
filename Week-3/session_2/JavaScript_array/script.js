 function divideArray(arr) {
    let evenNums = [];
    let oddNums = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2 === 0){
            evenNums.push(arr[i]);
        }else{
            oddNums.push(arr[i]);
        }
    }
    if(evenNums.length !== 0){
        
        console.log("Even numbers:", evenNums.sort().join(","));
    }else{
        console.log("Even numbers:", "None")
    }
    if(oddNums.length !== 0){
        console.log("Odd numbers:", oddNums.sort().join(","));
    }else{
        console.log("Odd numbers:", "None")
    }
}

let array = [4,2,9,1,8]

divideArray(array)