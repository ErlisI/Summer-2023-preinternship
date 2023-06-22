function findMax(arr) {
    if(arr.length === 0)
        return null;
        
    if(arr.length === 1)
        return arr[0];

    let temp = arr[0];
    for(let i = 0; i < arr.length; i++)
        if(arr[i] > temp)
            temp = arr[i];

    return temp;
}

module.exports = findMax;