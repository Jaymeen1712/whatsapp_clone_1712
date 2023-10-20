module.exports = function makeGetSingleUserActionController({ getSingleUser }) {
  return async function getSingleUserActionController(req, res) {
    try {
      const response = await getSingleUser({ params: req.params });
      res.send(response);
    } catch (error) {
      res.status(400).json({
        message: 'Data is required',
      });      
    }
  };
};
