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
    if (!originalUrl) {
      return next(createHttpError(400, "You should enter an url"));
    }
    let finalAlias = alias;
    if (!alias || alias.trim() === "") {
      finalAlias = Math.random().toString(36).substring(2, 8);
    }
    const exists = await Url.findOne({ alias: finalAlias });
    if (exists) {
      return next(createHttpError(400, "Alias already exists"));
    }

    await Url.create({ originalUrl, alias: finalAlias });

    res.redirect("/");
  } catch (err) {
    next(err);
  }
};
module.exports = { getAlias, getAllUrls, createAlias };
