
const getRandom = (arr) => {
   const index = Math.floor(Math.random() * arr.length);
  console.log (getRandom);
  return arr[index];
}

export default getRandom;