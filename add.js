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
       var array = numbers.split(/[,\n]/);
       var arrayLength = array.length;
       var negatives = [];
 
       for(var i = 0; i < arrayLength; i++)
       {
        if(parseInt(array[i]) < 0)
        {
            negatives[i] = array[i];
        }
            sum = sum + parseInt(array[i]); // ParseInt : converts a string to an integer.
       }
       if(negatives.length > 0)
       {
        return "Negatives not allowed: " + negatives;
       }
       else
       {
        return sum;
       }
    }
} 
module.exports = add;