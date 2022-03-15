import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';
import { FindAllDeliveriesDeliverymanController } from './modules/deliverymen/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';
import { FindAllDeliveriesClientController } from './modules/clients/useCases/findAllDeliveries/FindAllDeliveriesClientController';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { FindAllAvailableController } from './modules/deliverymen/useCases/findAllAvailable/FindAllAvailableController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDeliveriy/CreateDeliveryController';
import { AuthenticateDeliverymanController } from './modules/accounts/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from './modules/deliverymen/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateClientController } from './modules/accounts/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { Router } from "express";
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';

export const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesClientController = new FindAllDeliveriesClientController();

routes.post('/clients', createClientController.handle);
routes.post('/clients/authenticate', authenticateClientController.handle);
routes.get('/clients/deliveries', ensureAuthenticateClient, findAllDeliveriesClientController .handle);

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();

routes.post('/deliverymen', createDeliverymanController.handle);
routes.post('/deliverymen/authenticate', authenticateDeliverymanController.handle);
routes.get('/deliverymen/deliveries', ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle);

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post('/deliveries', ensureAuthenticateClient, createDeliveryController.handle);
routes.get('/deliveries/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle);
routes.put('/deliveries/updateDeliveryman/:delivery_id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
routes.put('/deliveries/updateEndDate/:delivery_id', ensureAuthenticateDeliveryman, updateEndDateController.handle)