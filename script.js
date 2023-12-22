//1.open class 
class resturantManager{
    resturantList =[{ //Q2
      
        id: 1,
        resturantName: 'Macdoland',
        address: 'woodbridge',
        city: 'dale city'
       },
       {
        id: 2,
        resturantName: 'KFC',
        address: 'Alexandria',
        city: 'Fair Fax'
       },
       {
        id: 3,
        resturantName: 'Chipotle',
        address: 'Dumfries',
        city: 'Prince william'
       },
       {
        id: 4,
        resturantName: 'wing stop',
        address: 'smoke town',
        city: 'dale city'
       },
       {
        id: 5,
        resturantName: 'subway',
        address: 'woodbridge',
        city: 'dale city'
    }]

    printAllResturantName =()=>{ //Q3 all resturant name
        return this.resturantList.map(resturant=>resturant.resturantName);
    }
    filterResturantsByCity=(cityName)=>{ //Q4 city
        return this.resturantList.filter(resturant=>resturant.city ==cityName);
    }
}
 const resturantobject = new resturantManager();
 const out= resturantobject.printAllResturantName();
 console.log(out);
 console.log(resturantobject.filterResturantsByCity("dale city"));
//Q2
  
  orderData = 
  { 'Below 500': 20, 
  '500-1000': 29, 
  '1000-1500': 30,  
  '1500-2000': 44, 
  'Above 2000': 76 }; 

  
  // a.total
  const total= Object.values(orderData).reduce(( prev, next )=> prev + next );
    console.log(total);
  //b.
  const rest = Object.keys(orderData);
  console.log(rest);
  //C
  let arr=[];
  const response=rest.map((item,index)=>
  {const Obj= {
    'id' :index +1,
    'order': item,
    'orderpercentage':((orderData[item]/total)*100).toFixed(2),
    'resturant':'Punjabe Tadka'
    
  }
  arr.push(Obj);

}
)
console.log(arr);