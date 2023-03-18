import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const newUser = new User(req.body);

    await newUser.save();
    res.status(201).send("계정이 생성되었습니다.");
  } catch (err) {
    res.status(500).send(err);
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
