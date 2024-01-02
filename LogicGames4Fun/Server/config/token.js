import crypto from "crypto";

export const secretKey = crypto.randomBytes(12).toString("hex");
