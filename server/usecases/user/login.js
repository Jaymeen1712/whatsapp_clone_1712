module.exports = function makeLogin({ logindb }) {
  return async function login({ body }) {
    const { username, password } = body;

    const result = await logindb({ username });

    if (result[0].length) {
      if (result[0][0].password === password) {
        return {
          message: "Username and password are correct!",
          is_user_valid: true,
          uuid: result[0][0].uuid,
        };
      } else {
        return {
          message: "Wrong Password!",
          is_user_valid: false,
          uuid: result[0][0].uuid,
        };
      }
    } else {
      return { message: "Username does not exist!", is_user_valid: false };
    }
  };
};
