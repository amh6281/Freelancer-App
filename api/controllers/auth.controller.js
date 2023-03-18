import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("계정이 생성되었습니다.");
  } catch (err) {
    res.status(500).send(err);
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
