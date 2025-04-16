import { Category } from "../models/category.model.js";


export const categoryController = {
  create: async (req, res, next) => {
    try {
      const body = req.body;
      const category = await Category.findOne(
        { name: body.name },
        "name",
      ).exec();

      if (!category) {
        const newCategory = new Category(body)
        await newCategory.save();
        res.status(201).send(newCategory);
        return;
      }
      res.status(409).json({ "message": "Category already exists!" })


    } catch (err) {
      res.status(409).json({ "message": "Category already exists!" })

      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      const { name } = req.body;

      if (!name && !id) {
        return res.status(400).json({ message: "Name and Id is required" });
      }



      const cat = await Category.findOneAndUpdate(
        { _id: id },
        { name },
        { new: true, runValidators: true }
      );

      if (!cat) {
        return res.status(404).json({ message: "Category not found" });
      }

      res.status(200).json({
        message: "Category updated successfully",
        cat
      });
    } catch (err) {
      return res.status(404).json({ message: "Category not found" });
      // next(err);
    }
  },
  findAll: async (req, res, next) => {
    try {

      const categories = await Category.find().exec();

      if (!categories) {
        res.status(404).json({ message: "Categories not found!" });
        return;
      }

      res.status(200).json(categories);

    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const id = req.params.id;
      // console.log(id)
      const category = await Category.findOne({ _id: id }).exec();

      if (!category) {
        res.status(404).json({ message: "Category not found!" });
        return;
      }

      res.status(200).json(category);

    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;

      const category = await Category.findOneAndDelete({ _id: id }).exec();
      if (!category) {
        res.status(404).json({ message: "Category not found!" });
        return;
      }
      console.log(category)
      res.status(200).json({ message: "Category deleted successfully!" });
    } catch (err) {
      next(err);
    }
  },
};
