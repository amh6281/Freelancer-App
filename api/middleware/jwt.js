export const verifyToken = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).send("인증되지 않았습니다.");

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return res.status(403).send("유효한 토큰이 아닙니다.");
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });
};
