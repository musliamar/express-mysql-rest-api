import express from 'express';
import {
  findEmployeeById,
  createEmployee,
  deleteEmployee,
  retrieveAllEmployees,
  updateEmployee,
}
  from '../controllers/employee.controller.js';

const router = express.Router();

router.get('/', retrieveAllEmployees);
router.get('/:id', findEmployeeById);
router.post('/', createEmployee);
router.patch('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;
