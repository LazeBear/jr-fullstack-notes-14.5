// const express = require('express');
const { Router } = require('express');
const {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
} = require('../controllers/students');

const studentRouter = Router();

studentRouter.get('', getAllStudents);
studentRouter.post('', addStudent);
studentRouter.get('/:id', getStudentById);
studentRouter.put('/:id', updateStudentById);
studentRouter.delete('/:id', deleteStudentById);

module.exports = studentRouter;
