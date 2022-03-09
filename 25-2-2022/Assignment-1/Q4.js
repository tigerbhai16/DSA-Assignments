function find_index(arr, n, K)
{
     
    // Traverse the array
    for(let i = 0; i < n; i++)
      
        // If K is found
        if (arr[i] == K)
            return i;
  
        // If current array element
        // exceeds K
        else if (arr[i] > K)
            return i;
  
    // If all elements are smaller
    // than K
    return n;
}
 
// Driver code
let arr = [1,3,5,6];
let n = arr.length;
let K = 2;
  
console.log(find_index(arr, n, K));

arr =  [1,3,5,6];
n = arr.length;
K = 7;
  
console.log(find_index(arr, n, K));


 