let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
 
 //first function
 let order = (fruit_name, call_production) =>{

  setTimeout(function(){

    console.log(`${stocks.Fruits[fruit_name]} was selected`)

// Order placed. Call production to start
   call_production();
  },2000)
};


//second function
let production = () =>{
  
  setTimeout(()=>{
    console.log("production has started")


    setTimeout(()=>{
      console.log("The fruit has been chopped")
      setTimeout(()=>{
          console.log(`${stocks.liquid[0] 
          } and ${stocks.liquid[1]} Added`)
          setTimeout(()=>{
              console.log("Start the machine")
              setTimeout(()=>{
                  console.log(`Ice cream placed on ${stocks.holder[1]}`)
                  setTimeout(()=>{
                    console.log(`topping to ${stocks.toppings[0]}`)
                    setTimeout(()=>{
                        console.log("order ice serve")
                    },2000)
                    
                  },3000)
                  
              },2000)
          },1000)
      },1000)
    },2000)


  },0000)
};

order(0,production)
