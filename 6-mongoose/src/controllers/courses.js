const Course = require('../models/course');
const Joi = require('joi');

// curring function
// function tryCatch(routeHandler) {
//   return (req, res, next) => {
//     try {
//       routeHandler(req, res, next);
//     } catch (e) {
//       next(e);
//     }
//   };
// }

async function getAllCourses(req, res) {
  // db.courses.find()
  // query (chain)
  // try {
  const courses = await Course.find().exec();
  return res.json(courses);
  // } catch {

  // }

  // Course.find().exec().then((result) => {

  // }).catch(error => {

  // })

  // Course.find((error, result) => {
  //   if (error) {
  //     next(error);
  //     return;
  //   }
  //   // handle result
  // })
}

async function getCourseById(req, res) {
  const { id } = req.params;
  // .find({_id:id})
  // use populate for retrieve student data
  const course = await Course.findById(id).exec();
  if (!course) {
    return res.status(404).json({ error: 'course not found' });
  }
  return res.json(course);
}

async function addCourse(req, res) {
  // const { code, name, description } = req.body;
  // validate data
  const schema = Joi.object({
    name: Joi.string().required(),
    // name: Joi.string().email().required()
    // 以字母开头，以数字结尾
    // COMP1001, SCI2002
    code: Joi.string()
      .regex(/^[a-zA-Z]+[0-9]+$/)
      .required(),
    description: Joi.string(),
  });

  // try {
  const { code, name, description } = await schema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknown: true,
  });
  // }

  // const array = [1, 2, 3];
  // array[0];
  // array[1];
  // const obj = {
  //     name: name,
  //     code: code,
  //     description: description,
  //   }
  // obj.description, obj.name, obj.code

  // new Course(req.body);
  // Course.create()

  // check if code duplicate
  const existingCourse = await Course.findById(code).exec();
  if (existingCourse) {
    // conflicts
    return res.sendStatus(409);
  }

  const course = new Course({
    name,
    code,
    description,
  });
  await course.save();
  return res.status(201).json(course);
}

async function updateCourseById(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;
  // validate data

  // db.collections.updateOne({_id:id}, {$set})
  // const course = await Course.findById(id);
  // course.name = name;
  // course.description = description;
  // await course.save();

  const course = await Course.findByIdAndUpdate(
    id,
    { name, description },
    { new: true }
  ).exec();
  if (!course) {
    return res.status(404).json({ error: 'course not found' });
  }
  return res.json(course);
}

async function deleteCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findByIdAndDelete(id).exec();
  if (!course) {
    return res.status(404).json({ error: 'course not found' });
  }
  // remove course ref in student collection
  return res.sendStatus(204);
}

module.exports = {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourseById,
  deleteCourseById,
};
