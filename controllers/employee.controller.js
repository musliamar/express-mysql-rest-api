import Employee from '../models/employee.model.js';

export const retrieveAllEmployees = async (req, res) => {
  const data = await Employee.findAll();
  if (data) {
    res.json(data);
  } else {
    res.status(404).send({ message: 'Cannot retrieve employees' });
  }
};

export const findEmployeeById = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findByPk(id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send({ message: `Error retrieving Employee with id=${id}` });
  }
};

export const createEmployee = async (req, res) => {
  /*  const id = req.body.id;

    if (await Employee.findOne({ where: { id: id } })) {
        res.json({
            message: 'Employee with ID number "' + id + '" already exists',
            severity: 'error'
          });

    } else { */

  await Employee.create(req.body);
  res.json({
    message: 'Employee added successfully!',
    severity: 'success',
  });
};

export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    await employee.destroy();
    res.json({ message: 'Employee is deleted successfully', severity: 'success' });
  } catch (error) {
    res.json({ message: error.message, severity: 'error' });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    await Employee.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.json({ message: 'Employee is updated successfully', severity: 'success' });
  } catch (error) {
    res.json({ message: error.message, severity: 'error' });
  }
};
