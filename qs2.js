// [ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    // [1,'Ernakulam',34000,2000,23000,20000,2000],
    // [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    // [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    // [5,'Kozhikode',44000,5000,12000,21000,500],
    // [6,'Palakkad',12000,1000,20000,23000,3400],
    // [7,'Kottayam',27000,1500,27000,14000,1000],
    // [8,'Kollam',14000,2500,25000,18000,2700]
]

//  1 district having Highest +ve case - 
// let a=covid_data.reduce((x1,x2)=>x1[2]>x2[2]?x1:x2)
// console.log(a[1])
// 2 district having Highest 1st dose vaccine - 

// let b=covid_data.reduce((p1,p2)=>p1[5]>p2[5]?p1:p2)
// console.log("highest 1st dose:",b[1]);


// 3. district having lowest death rate -
// let d=covid_data.reduce((k1,k2)=>k1[3]<k2[3]?k1:k2);
// console.log(" lowest death rate",d[1]);

// /4. sort data with +ve case in descending order -
// let r =covid_data.sort((p1,p2)=>p2[2]-p1[2]).forEach(k=>console.log(k[1],k[2]));


// 5. is district with +ve cases > 15000 - 
// let t=covid_data.filter(k=>k[2]>15000).forEach(k=>console.log(k[1]));

// 6 sort data with 1st dose vaccine - 
// let r =covid_data.sort((p1,p2)=>p1[5]-p2[5]).forEach(k=>console.log(k[1],k[5]));
// console.log(r);
//7. Print Thrissur details - 
let thrissur=covid_data.filter(k=>k[1] =='Thrissur').forEach(k=>console.log(k));
// console.log(thrissur);
