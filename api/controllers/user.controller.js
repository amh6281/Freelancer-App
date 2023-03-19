import User from "../models/user.model.js";
import { createError } from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "자신의 계정만을 삭제할 수 있습니다."));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("계정이 삭제되었습니다.");
};
