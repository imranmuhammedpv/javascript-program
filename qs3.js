// function sumtwo(num,sum){
//     num.sort()
//     let left= 0;
//     let right=len(num)-1;
//     while (left <=right){
//         if(num[left]+num[right]>sum){
//             right=right+1
//         }else if(num[left]+num[right]<num){
//             left=left=1
//         }else(num[left]+num[right]==sum)
//         console.log(num[left],num[right]);
//           left=left+1
//           right=right-1
//         }   
//         }
        
    
// num=[3,5,6,8,9,2]
// sum=14
// sumtwo(num,sum)

let num=[2,7,14,15]
let tar=29
 for(let i=0;i<=4;i++){
 for (let j=1;j<=4;j++){
    if(num[i]+num[j]==tar){
        console.log(i,j);

    }
   }
 }