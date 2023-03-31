import Gig from "../models/gig.model.js";
import { createError } from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller) return next(createError(403, "판매자가 아닙니다."));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (gig.userId !== req.userId)
      return next(createError(403, "자신의 작업물만 삭제할 수 있습니다."));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("작업물이 삭제되었습니다.");
  } catch (err) {
    next(err);
  }
};
export const getGig = async (req, res, next) => {};
export const getGigs = async (req, res, next) => {};
