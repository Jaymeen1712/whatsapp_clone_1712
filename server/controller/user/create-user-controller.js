module.exports = function makeCreateUserActionController({ createUser }) {
  return async function createUserActionController(req, res) {
    try {
      const response = await createUser({ body: req.body });
      res.send(response);
    } catch (error) {
      res.status(400).json({
        message: 'Data is required',
      });      
    }
  };
};
