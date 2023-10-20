module.exports = function makeGetAllUsersActionController({ getAllUsers }) {
  return async function getAllUsersActionController(req, res) {
    try {
      const response = await getAllUsers();
      res.send(response);
    } catch (error) {
      return {
        message: "Error getting users!",
      };
    }
  };
};
