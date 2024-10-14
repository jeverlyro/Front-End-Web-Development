//Asynchronous JS

//Synchronous
// setTimeout(() => {
//   console.log("Proses 1");
// }, 3000);

// console.log("Proses 2");

// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);

//Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

// let condition = true;
// const newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Gagal");
//   }
// });

// newPromise
//   .then((result) => result)
//   .then((result2) => console.log(result2))
//   .catch((error) => console.log(error));

//Async - Await
//Harus di dalam fungsi
// const consumePromise = async () => {
//   try {
//     let result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// consumePromise();

// (async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let json = await response.json();
//   console.log(json);
//   json.forEach(({ name }) => console.log(name));
// })();

(async () => {
  let result = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  result.data.forEach(({ name }) => console.log(name));
})();
