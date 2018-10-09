// StringCalculator.js
function add(numbers) {
    if(numbers == "")
    {
    return 0;
    }
    else if(numbers.length == 1)
    {
        return parseInt(numbers);
    }
    else
    {
       var sum = 0;
       var array = numbers.split(",");
       var arrayLength = array.length;

       for(var i = 0; i < arrayLength; i++)
       {
            sum = sum + parseInt(array[i]);
       }
       return sum;
    }
} 
module.exports = add;