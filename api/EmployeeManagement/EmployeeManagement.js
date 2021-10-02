const express = require('express');
const router = express.Router();
const EmployeeManagement = require('../../controllers/EmployeeManagement/EmployeeManagement.controller');


router.post('/add',EmployeeManagement.addEmployee)
router.get('/display/:Branch',EmployeeManagement.displayEmployee)
router.get('/getid/:id',EmployeeManagement.displayEmployeeByID)
router.put('/updates/:id',EmployeeManagement.updateEmployee)
router.delete('/delete/:id',EmployeeManagement.deleteEmployee)
router.get('/employee/chefs/:branch',EmployeeManagement.getChefsByBranch);
router.get('/employee/d_guys/:branch',EmployeeManagement.getDeliveryGuyByBranch);



module.exports = router;
