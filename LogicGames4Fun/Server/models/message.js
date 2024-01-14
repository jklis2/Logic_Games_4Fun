import mongoose from "mongoose";

export const MessageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLenght: 4,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 40,
    validator: function (email) {
      const mailRegex =
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
      return mailRegex.test(email);
    },
    message: "The email must contain at least 8 characters and @ character",
  },
  message: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 255,
  },
});

const MessageModel = mongoose.model("Message", MessageSchema);
export default MessageModel;

