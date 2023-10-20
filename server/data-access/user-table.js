module.exports = function makeUserTable({ connection }) {
  return Object.freeze({
    createUser,
    getAllUsers,
    login,
    getSingleUser
  });

  async function createUser({ insertObj }) {
    const sql = `INSERT INTO user SET ?`;
    const result = await connection.query(sql, insertObj);
    return result;
  }

  async function getAllUsers() {
    const sql = `SELECT * FROM user`;
    const result = await connection.query(sql);
    return result;
  }

  async function login({ username }) {
    const sql = `SELECT * FROM user WHERE username = ?`;
    const result = await connection.query(sql, [username]);
    return result;
  }

  async function getSingleUser({ uuid }) {
    const sql = `SELECT * FROM user WHERE uuid = ?`;
    const result = await connection.query(sql, [uuid]);
    return result;
  }
};
