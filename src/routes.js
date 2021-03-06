'use strict';

const express = require('express');
const multer = require('multer');

const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

// Controllers
const SessionController = require('../src/controllers/SessionController');
const SpotController = require('../src/controllers/SpotController');
const DashboardController = require('../src/controllers/DashboardController');
const BookingController = require('../src/controllers/BookingController');
const ApprovalController = require('../src/controllers/ApprovalController');
const RejectController = require('../src/controllers/RejectController');

// Routes
routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectController.store);

module.exports = routes;