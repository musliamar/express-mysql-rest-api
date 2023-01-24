import Client from '../models/client.model.js';

export const retrieveAllClients = async (req, res) => {
  const data = await Client.findAll();
  if (data) {
    res.json(data);
  } else {
    res.status(404).send({ message: 'Cannot retrieve clients' });
  }
};

export const findClientById = async (req, res) => {
  const { id } = req.params;
  const client = await Client.findByPk(id);
  if (client) {
    res.json(client);
  } else {
    res.status(404).send({ message: `Error retrieving Client with id=${id}` });
  }
};

export const createClient = async (req, res) => {
  const { idNumber } = req.body;
  if (await Client.findOne({ where: { idNumber } })) {
    res.json({
      message: `Client with ID number "${idNumber}" already exists`,
      severity: 'error',
    });
  } else {
    await Client.create(req.body);
    res.json({
      message: 'Client added successfully!',
      severity: 'success',
    });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    await client.destroy();
    res.json({ message: 'Client is deleted successfully', severity: 'success' });
  } catch (error) {
    res.json({ message: error.message, severity: 'error' });
  }
};

export const updateClient = async (req, res) => {
  try {
    await Client.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.json({ message: 'Client is updated successfully', severity: 'success' });
  } catch (error) {
    res.json({ message: error.message, severity: 'error' });
  }
};
