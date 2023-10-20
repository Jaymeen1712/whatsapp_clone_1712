module.exports = function makeGetAllUsers({ getAllUsersdb }) {
  return async function getAllUsers() {
    const result = await getAllUsersdb();

    if (result) {
      return {
        users: result[0],
      };
    } else {
      return { message: "Error getting users!" };
    }
  };
};
