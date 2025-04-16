import { Product } from "../models/product.model.js";

export const productController = {
  create: async (req, res, next) => {
    try {
      const body = req.body

      // if (!mongoose.Types.ObjectId.isValid(category)) {
      //   return res.status(400).json({ error: 'Invalid category ID' });
      // }

      const product = new Product(body);
      await product.save();
      res.status(201).json(product);
      return
    } catch (err) {
      return res.status(400).json({ error: 'Invalid category ID' });

      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      const { name, price, description, stock, category } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Id is required" });
      }



      const product = await Product.findOneAndUpdate(
        { _id: id },
        { name, price, description, stock, category },
        { new: true, runValidators: true }
      );

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json({
        message: "Product updated successfully",
        product
      });
    } catch (err) {
      return res.status(404).json({ message: "Product not found" });
      // next(err);
    }
  },
  findAll: async (req, res, next) => {
    try {
      const products = await Product.find().exec();

      if (!products) {
        res.status(404).json({ message: "Products not found!" });
        return;
      }

      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const id = req.params.id;
      // console.log(id)
      const productt = await Product.findOne({ _id: id }).exec();

      if (!productt) {
        res.status(404).json({ message: "Productt not found!" });
        return;
      }

      res.status(200).json(productt);

    } catch (err) {
      res.status(404).json({ message: "Productt not found!" });
      // next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;

      const productt = await Product.findOneAndDelete({ _id: id }).exec();
      if (!productt) {
        res.status(404).json({ message: "Product not found!" });
        return;
      }
      // console.log(productt)
      res.status(200).json({ message: "Product deleted successfully!" });
    } catch (err) {
      res.status(404).json({ message: "Product not found!" });
      // next(err);
    }
  },
};
