module.exports = function makeGetSingleUser({ getSingleUserdb }) {
  return async function getSingleUser({ params }) {
    const { uuid } = params;
    const result = await getSingleUserdb({ uuid });
    if (result) {
      return {
        users: result[0],
      };
    } else {
      return { message: "Error getting user!" };
    }
  };
};
