module.exports = function makeLoginActionController({ login }) {
  return async function loginActionController(req, res) {
    try {
      const response = await login({ body: req.body });
      res.send(response);
    } catch (error) {
      res.status(400).json({
        message: 'Data is required',
      });      
    }
  };
};
