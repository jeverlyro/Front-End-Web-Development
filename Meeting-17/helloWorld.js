// 1.
const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
};

async function messages() {
  let msg = await helloWorld();
  console.log(msg);
}

messages();
export { messages };
