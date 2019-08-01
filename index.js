
function add(a,b){
    console.log(a+b);
}
add(1);

array=[1,3,4,6,7,8,10,14,15];
result=[];
var target=14;
function twoSum1(array,target){
for(var i; i<array.length;i++) {
        for(var j;j<array.length;j++){
            if((array[i]+array[j]==target) && (i!=j)){
                return[i,j];
            }
        }
    }
return[-1,-1];
}
console.log(twoSum1(array,target));

function twoSum2(array,target){
 var diffs={};
 for(var i=0;i<array.length;i++){
     var currentNumber = array[i];
     var diff = target-currentNumber;
     if(diffs[diff]){
         return[diffs[currentNumber],i];
     }
     diffs[currentNumber]=i;
 }
}
console.log(twoSum2(array,target));
