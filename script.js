function mincost(arr)
{ 
//write your code here
		function sort(arr){arr.sort((a,b)=>{return a-b;});}
	while (arr.length>1){
	    sort(arr);
	   
		cost=arr[0]+arr[1];
		sum=sum+cost;
	arr.shift();
	arr.shift();
	arr.unshift(cost);
}


// return the min cost
return sum;
  
}

module.exports=mincost;
