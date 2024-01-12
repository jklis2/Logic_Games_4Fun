import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    minLenght: 4,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    // maxLength: 16,
    // validator: function (password) {
    //   const passwordRegex =
    //     "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,16}$";
    //   return passwordRegex.test(password);
    // },
    message:
      "The password must contain at least 8 characters, at least one lowercase letter, one uppercase letter, one number and one special character  ",
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
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  path: {
    type: String,
  },
  achievements: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Achievement",
    },
  ],
  isAdmin: {
    type: Boolean,
  },
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
