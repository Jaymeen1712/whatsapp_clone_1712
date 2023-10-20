module.exports = function makeCreateMessageActionController({ createMessage }) {
  return async function createMessageActionController(req, res) {
    try {
      const response = await createMessage({ body: req.body });
      res.send(response);
    } catch (error) {
      res.status(400).json({
        message: 'Data is required',
      });      
    }
  };
};
