import MessageModel from "../models/message.js";

export async function sendMessage(req, res) {
  try {
    const { name, email, message } = req.body;

    await new MessageModel({
      name,
      email,
      message,
    }).save();

    return res.status(200).json({ message: "Success! Message was sent." });
  } catch (err) {
    res.status(500).json(err);
  }
}
