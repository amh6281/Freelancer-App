import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    res.status(500).send("잘못된 접근입니다.");
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).send("사용잦를 찾을 수 없습니다.");

    //req.body.password와 DB에 저장된 user.password를 비교
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return res.status(400).send("아이디 혹은 비밀번호가 잘못되었습니다.");

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    //password와 나머지 info를 분리
    const { password, ...info } = user._doc;
    res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);
  } catch (err) {
    res.status(500).send("잘못된 접근입니다.");
  }
};

export const logout = async (req, res) => {};
