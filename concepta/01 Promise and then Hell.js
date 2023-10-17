console.log("person 1:Show ticket");
console.log("person 2:Show ticket");
// ? wife wants ticket,so we make a promise to wife to bring ticket after 3s.
const promiseWifeBringTicket = new Promise((res, rej) => {
  setTimeout(() => {
    res("ticket");
  }, 3000);
});
// ! now she wants popcorn too,so again make a promise to get popcorn in 2s
const getPopcorn = promiseWifeBringTicket.then((ticket) => {
  console.log("wife:i have the tics");
  console.log("husband :we should go in");
  console.log("wife: no i am hungry");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${ticket}, popcorn`);
    }, 2000);
  });
});
// todo now again she demands to get some butter on our popcorn,so we again make a promise to give her butter in 2s.
const getbutter = getPopcorn.then((msg) => {
  console.log("husband:i got some popcorn");
  console.log("husband:we should go in");
  console.log("wife:i need butter on popcorn");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${msg} ,butter`);
    }, 2000);
  });
});

// ! finally ,she agrees to go,after getting all things.
const getColdDrinks=getbutter.then((msg) => {
  console.log("husband:need anything else")
  console.log("wife:: okk get some colddrink")
  return new Promise((res,rej)=>{
     setTimeout(()=>{
    res(`${msg} and drinks`)
  },3000)
  })
});

getColdDrinks.then((msg)=>{
  console.log(`Person3 shows ticket and have ${msg}`)
})

console.log("person 4:Show ticket");
console.log("person 5:Show ticket");
