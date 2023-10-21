module.exports = function makeGetChatHistoryActionController({
  getChatHistory,
}) {
  return async function getChatHistoryActionController(req, res) {
    try {
      const response = await getChatHistory({ params: req.params });
      res.send(response);
    } catch (error) {
      res.status(400).json({
        message: "Data is required",
      });
    }
  };
};
