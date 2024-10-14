//3.
const ambilDataUserAsync = async () => {
  try {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((users) => {
        users.data.forEach((user) => {
          console.log(`${user.first_name} ${user.last_name}`);
        });
      });
  } catch (error) {
    console.log(error);
  }
};

ambilDataUserAsync();
export { ambilDataUserAsync };
