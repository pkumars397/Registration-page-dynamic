console.log("Person1:shows ticket");
console.log("Person2:shows ticket");
// !async always return a promise.
// const preMovie=async()=>'preMovie';
// preMovie().then((m)=>console.log(m))

const preMovie = async () => {
  const getTicket = new Promise((res, rej) => {
    setTimeout(() => {
      res("ticket");
    }, 2000);
  });

  const getPopcorn = new Promise((res, rej) => {
    setTimeout(() => {
      res("popcorn");
    }, 2000);
  });

  const getbutter = new Promise((res, rej) => {
    // console.log("hello") // !this line will run immediately after resolving getpopcorn.
    setTimeout(() => {
      res("butter");
    }, 2000);
  });

  const getColdDrinks = new Promise((res, rej) => {
    setTimeout(() => {
      res("coldDrink");
    }, 2000);
  });
  let [ticket,popcorn,butter,drink]=await Promise.all([getTicket,getPopcorn,getbutter,getColdDrinks]);
  console.log(`${popcorn},${butter},${drink}`)
  return `${ticket}`;
};
preMovie().then((m) => console.log(`person3 shows the ${m}`));
console.log("Person3:shows ticket");
console.log("Person4:shows ticket");
