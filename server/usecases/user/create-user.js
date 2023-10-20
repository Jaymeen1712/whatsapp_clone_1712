module.exports = function makeCreateUser({
  uuidv4,
  moment,
  createUserdb,
}) {
  return async function createUser({ body }) {
    const uuid = uuidv4();
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
    const updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");

    const { firstName, lastName, username, password } = body;

    let insertObj = {
      uuid,
      firstName,
      lastName,
      username,
      password,
      createdAt,
      updatedAt,
    };

    const result = await createUserdb({ insertObj });

    if (result[0].affectedRows > 0) {
      const response = {
        message: "User created successfully!",
        uuid: insertObj.uuid,
      };
      return response;
    } else {
      return { message: "User is not created!" };
    }
  };
};
