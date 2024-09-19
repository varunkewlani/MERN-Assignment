const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.post('/add', async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.json(newEmployee);
});

router.get('/list', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

router.put('/update/:id', async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(employee);
});

router.delete('/delete/:id', async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ msg: "Employee deleted" });
});

module.exports = router;
