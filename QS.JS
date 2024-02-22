products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]


//1. print product name only

// let i=products.map(p=>p.pName)
// console.log(i)

// print all mobile details whose display is lcd

// products.filter(p=>p.display=='lcd').forEach(p=>console.log(p));

// print 5g mobile phone name
// products.filter(p=>p.band=='5g').forEach(items=>console.log(items.pName));

// filter mobile based on price

let c  =products.sort((p1,p2)=>p1.price-p2.price)
console.log(c);
