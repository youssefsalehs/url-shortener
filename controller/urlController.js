const createHttpError = require("http-errors");
const Url = require("../model/Url");

const getAlias = async (req, res, next) => {
  try {
    const { alias } = req.params;
    const url = await Url.findOne({ alias });

    if (!url) {
      return next(createHttpError(404, "Short URL not found"));
    }

    res.redirect(url.originalUrl);
  } catch (err) {
    next(err);
  }
};
const getAllUrls = async (req, res, next) => {
  try {
    const urls = await Url.find();
    res.render("index", { urls });
  } catch (err) {
    next(err);
  }
};
const createAlias = async (req, res, next) => {
  try {
    const { originalUrl, alias } = req.body;
    if (!originalUrl || !alias) {
      return next(createHttpError(400, "Missing fields"));
    }

    const exists = await Url.findOne({ alias });
    if (exists) {
      return next(createHttpError(400, "Alias already exists"));
    }

    await Url.create({ originalUrl, alias });

    res.redirect("/");
  } catch (err) {
    next(err);
  }
};
module.exports = { getAlias, getAllUrls, createAlias };
