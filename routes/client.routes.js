import express from 'express';
import {
  findClientById,
  createClient,
  deleteClient,
  retrieveAllClients,
  updateClient,
}
  from '../controllers/client.controller.js';

const router = express.Router();

router.get('/', retrieveAllClients);
router.get('/:id', findClientById);
router.post('/', createClient);
router.patch('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;
