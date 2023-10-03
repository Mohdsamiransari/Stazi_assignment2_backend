const Property = require('../models/PropertyModel')
const cloudinary = require('cloudinary').v2

// Create
exports.createProperty = async (req, res) => {
  try {
    const {
      name,
      propertyType,
      location,
      room,
      bed,
      bath,
      area,
      price,
    } = req.body;

    const image = req.files.photo

    const propertyIamge = await cloudinary.uploader.upload(image.tempFilePath,{folder:"PropertyImages"})    

    const newProperty = await Property.create({ 
        image:propertyIamge.secure_url,
        name,
        propertyType,
        location,
        room,
        bed,
        bath,
        area,
        price,
    });
    newProperty.save()

    return res.status(200).json({
      success: true,
      message: "Car detail created successfully",
      Property,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating car model",
    });
  }
};

exports.getProperty = async (req, res) => {

  try {
    let limit = Number(req.query.limit)
    const data = await Property.find().limit(limit);

    return res.status(200).json({
      success: true,
      message: "Data found successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching car data",
    });
  }
};

exports.singleProperty = async (req, res) => {
  const product = await Property.findById(req.params._id);

  

  res.status(200).json({
    success: true,
    product,
  });
};