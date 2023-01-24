import express from 'express';
import {
  findCarById,
  createCar,
  deleteCar,
  retrieveAllCars,
  updateCar,
  findRepairsByCarId,
  findRepairById,
  createCarRepair,
  updateCarRepair,
  deleteCarRepair,
  findRentalsByCarId,
  findRentalById,
  createCarRental,
  updateCarRental,
  deleteCarRental,
}
  from '../controllers/car.controller.js';

const router = express.Router();

router.get('/', retrieveAllCars);
router.get('/:id', findCarById);
router.post('/', createCar);
router.patch('/:id', updateCar);
router.delete('/:id', deleteCar);

router.get('/rentals/:id', findRentalsByCarId);
router.get('/rental/:id', findRentalById);
router.post('/rental', createCarRental);
router.patch('/rental/:id', updateCarRental);
router.delete('/rental/:id', deleteCarRental);

router.get('/repairs/:id', findRepairsByCarId);
router.get('/repair/:id', findRepairById);
router.post('/repair', createCarRepair);
router.patch('/repair/:id', updateCarRepair);
router.delete('/repair/:id', deleteCarRepair);

export default router;
