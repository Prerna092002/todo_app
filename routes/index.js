const express = require('express');
// uding express router
const router = express.Router();

// requiring home controller
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.get('/profile/:id', homeController.profile);
router.post('/create-task', homeController.task);
router.get('/delete-task/:id', homeController.delete);
router.post('/update-task/:id' , homeController.update);
router.get('/complete/:id', homeController.complete);
router.get('/completed-task' , homeController.completed)
// exporting
module.exports = router;