import { Op } from 'sequelize';
import Car from '../models/car.model.js';
import Repair from '../models/carMaintenance.model.js';
import Rental from '../models/carRental.model.js';

export const retrieveAllCars = async (req, res) => {
  const data = await Car.findAll();
  if (data) {
    res.json(data);
  } else {
    res.status(404).send({ message: 'Cannot retrieve cars' });
  }
};

export const findCarById = async (req, res) => {
  const { id } = req.params;
  const car = await Car.findByPk(id);
  if (car) {
    res.json(car);
  } else {
    res.status(404).send({ message: `Error retrieving Car with id=${id}` });
  }
};

export const createCar = async (req, res) => {
  const { chassisNumber } = req.body;
  if (await Car.findOne({ where: { chassisNumber } })) {
    res.json({
      message: `Car with chassis number "${chassisNumber}" already exists`,
      severity: 'error',
    });
  } else {
    await Car.create(req.body);
    res.json({
      message: 'Car added successfully!',
      severity: 'success',
    });
  }
};

export const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    await car.destroy();
    res.json({ message: 'Car is deleted successfully', severity: 'success' });
  } catch (error) {
    res.json({ message: error.message, severity: 'error' });
  }
};

export const updateCar = async (req, res) => {
  if (req.body.chassisNumber
        && await Car.findOne({ where: { chassisNumber: req.body.chassisNumber } })) {
    res.json({
      message: `Car with chassis number "${req.body.chassisNumber}" already exists`,
      severity: 'error',
    });
  } else {
    try {
      await Car.update(req.body, {
        where: {
          id: req.body.id,
        },
      });
      res.json({ message: 'Car is updated successfully', severity: 'success' });
    } catch (error) {
      res.json({ message: error.message, severity: 'error' });
    }
  }
};

export const createCarRental = async (req, res) => {
  if (!(req.body.idOfRentedCar === null) && (req.body.isActive === true) && await Car.findOne({
    where: {
      id: req.body.idOfRentedCar,
      currentlyRentedToClientId: {
        [Op.not]: null,
      },
    },
  })) {
    res.json({ message: 'This car is already rented to somebody.', severity: 'error' });
  } else {
    await Rental.create(req.body);
    res.json({
      message: 'Rental added successfully!',
      severity: 'success',
    });
  }
};

export const deleteCarRental = async (req, res) => {
  try {
    const rental = await Rental.findByPk(req.params.id);
    await rental.destroy();
    res.json({ message: 'Rental is deleted successfully', severity: 'success' });
  } catch (error) {
    res.json({ message: error.message, severity: 'error' });
  }
};

export const updateCarRental = async (req, res) => {
  if (!(req.body.idOfRentedCar === null) && (req.body.isActive === true) && await Car.findOne({
    where: {
      id: req.body.idOfRentedCar,
      currentlyRentedToClientId: {
        [Op.not]: null,
      },
    },
  })) {
    if (await Car.findOne({
      where: {
        id: req.body.idOfRentedCar,
        currentlyRentedToClientId: req.body.rentedToClientId,
      },
    })) {
      try {
        await Rental.update(req.body, {
          where: {
            id: req.body.id,
          },
        });
        res.json({ message: 'Rental is updated successfully', severity: 'success' });
      } catch (error) {
        res.json({ message: error.message, severity: 'error' });
      }
    } else {
      res.json({ message: 'This car is already rented to somebody.', severity: 'error' });
    }
  } else {
    try {
      await Rental.update(req.body, {
        where: {
          id: req.body.id,
        },
      });
      res.json({ message: 'Rental is updated successfully', severity: 'success' });
    } catch (error) {
      res.json({ message: error.message, severity: 'error' });
    }
  }
};

export const findRentalsByCarId = async (req, res) => {
  const { id } = req.params;
  const rentals = await Rental.findAll({
    where: {
      idOfRentedCar: id,
    },
  });
  if (rentals) {
    res.json(rentals);
  } else {
    res.status(404).send({ message: `Error retrieving rentals of car id=${id}` });
  }
};

export const findRepairsByCarId = async (req, res) => {
  const { id } = req.params;
  const repair = await Repair.findAll({
    where: {
      idOfRepairedCar: id,
    },
  });
  if (repair) {
    res.json(repair);
  } else {
    res.status(404).send({ message: `Error retrieving repairs of car with id=${id}` });
  }
};

export const findRepairById = async (req, res) => {
  const { id } = req.params;
  const repair = await Repair.findAll({
    where: {
      id,
    },
  });
  if (repair) {
    res.json(repair);
  } else {
    res.status(404).send({ message: `Error retrieving Repair with id=${id}` });
  }
};

export const findRentalById = async (req, res) => {
  const { id } = req.params;
  const rental = await Rental.findAll({
    where: {
      id,
    },
  });
  if (rental) {
    res.json(rental);
  } else {
    res.status(404).send({ message: `Error retrieving Rental with id=${id}` });
  }
};

export const createCarRepair = async (req, res) => {
  await Repair.create(req.body);
  res.json({
    message: 'Repair added successfully!',
    severity: 'success',
  });
};

export const deleteCarRepair = async (req, res) => {
  try {
    const repair = await Repair.findByPk(req.params.id);
    await repair.destroy();
    res.json({ message: 'Repair is deleted successfully', severity: 'success' });
  } catch (error) {
    res.json({ message: error.message, severity: 'error' });
  }
};

export const updateCarRepair = async (req, res) => {
  try {
    await Repair.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.json({ message: 'Repair is updated successfully', severity: 'success' });
  } catch (error) {
    res.json({ message: error.message, severity: 'error' });
  }
};
