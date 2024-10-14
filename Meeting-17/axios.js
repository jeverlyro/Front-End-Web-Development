// 4.
const ambilDataUserAxios = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    const users = response.data.data;
    users.forEach((user) => {
      console.log(`${user.first_name} ${user.last_name}`);
    });
  } catch (error) {
    console.error(error);
  }
};

ambilDataUserAxios();
export { ambilDataUserAxios };
