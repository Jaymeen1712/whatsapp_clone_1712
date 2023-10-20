module.exports = function makeMessageTable({ connection }) {
  return Object.freeze({
    createMessage,
    getMatchedMessages,
  });

  async function createMessage({ insertObj }) {
    const sql = `INSERT INTO message SET ?`;
    const result = await connection.query(sql, insertObj);
    return result;
  }

  async function getMatchedMessages({ senderId, receiverId }) {
    const sql = `
    SELECT * FROM message 
    WHERE (senderId = ? AND receiverId = ?) 
    OR (senderId = ? AND receiverId = ?)
  `;

    const response = await connection.query(sql, [
      senderId,
      receiverId,
      receiverId,
      senderId,
    ]);

    return response
  }
};
