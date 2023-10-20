module.exports = function makeGetMatchedMessagesActionController({
  getMatchedMessages,
}) {
  return async function getMatchedMessagesActionController(req, res) {
    try {
      const response = await getMatchedMessages({ params: req.params });
      res.send(response);
    } catch (error) {
      res.status(400).json({
        message: "Data is required",
      });
    }
  };
};
