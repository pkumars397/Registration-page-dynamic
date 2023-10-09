console.log('Person1:shows ticket')
console.log('Person2:shows ticket')
// !async always return a promise.
// const preMovie=async()=>'preMovie';
// preMovie().then((m)=>console.log(m))

const preMovie=async()=>{
  const getTicket=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("ticket");
    },2000)

  })
  
 
  const ticket=await getTicket;
  console.log(`husband: i got ${ticket}`)
  console.log('husband:we should go in')
  console.log('wife:no honey i hungry')
  
  const getPopcorn = new Promise((res, rej) => {
    setTimeout(() => {
      res("popcorn");
    }, 2000);
  });

  const popcorn=await getPopcorn;
  console.log(`husband: i got some ${popcorn}`)
  console.log(`husband: we now should go in`)
  console.log(`wife: i need butter on my popcorn`)


   const getbutter = new Promise((res, rej) => {
    // console.log("hello") // !this line will run immediately after resolving getpopcorn.
     setTimeout(() => {
       res("butter");
     }, 2000);
   });
  const butter=await getbutter;
  console.log(`Husband:okkk honey i got some ${butter} also`)
  console.log(`husband: anything else`)
  console.log(`wife: lets go we are getting late `);
  console.log('husband: thanks dear')
  
  const getColdDrinks=new Promise((res,rej)=>{
    setTimeout(()=>{
      res("coldDrink")
  },2000)
  })
  
  const drinks=await getColdDrinks;
  console.log(`husband: also got some ${drinks} for u honey`)
  console.log(`Wife Thanks so much my honey bunny !! Hehe`)
  return `${ticket}`;
}
preMovie().then((m)=>console.log(`person3 shows the ${m}`))
console.log('Person3:shows ticket')
console.log('Person4:shows ticket')