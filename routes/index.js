const { urlencoded } = require('express');

const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/' , homeController.home);
router.post('/create-tasks', homeController.addTasks);
router.post('/delete-task' , homeController.deleteTask);

module.exports = router;