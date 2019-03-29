/*Lauren has a chart of distinct projected prices for a house over the next several years. She must buy the house in one year and 
sell it in another, and she must do so at a loss. She wants to minimize her financial loss.

For example, the house is valued at price = [20,15,8,2,12] over the next n = 5 years. She can purchase the home in any year,
 but she must resell the house at a loss in  one of the following years. 
Her minimum loss would be incurred by purchasing in year 2 at price[1] = 15 and reselling in year 5 at price[4] = 12.
Find and print the minimum amount of money Lauren must lose if she buys the house and resells it within the next n years.
EXAMPLE : 
Sample Input 
3
5 10 3
Sample Output 0
2
*/



var readline = require('readline-sync');

var n = readline.question('enter the number ');
var arr = []
for(var i = 0; i<n; i++){
	arr.push(readline.question('enter the numbers for the array :'))
}
if(Math.max(...arr)!=arr[0]){
	var res = arr[0]-arr[n-1]
}else{
	var res = arr[1]-arr[n-1]
}
console.log(res)