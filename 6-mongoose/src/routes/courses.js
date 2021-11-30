// const express = require('express');
const { Router } = require('express');
const {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourseById,
  deleteCourseById,
} = require('../controllers/courses');

const courseRouter = Router();

courseRouter.get('', getAllCourses);
courseRouter.post('', addCourse);
courseRouter.get('/:id', getCourseById);
courseRouter.put('/:id', updateCourseById);
courseRouter.delete('/:id', deleteCourseById);

module.exports = courseRouter;
