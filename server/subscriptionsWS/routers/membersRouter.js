const express = require('express');
const membersBLL = require('../BLL/membersBLL');

const router = express.Router();

// Get All members
router.route('/').get(async (req, res) => {
    try {
      const members = await membersBLL.getAllMembers();
      res.json(members); // 200 - OK
    } catch (error) {
      res.json('There was an error!');
    }
  });
  
  // Get member by ID
  router.route('/:id').get(async (req, res) => {
    const { id } = req.params;
    const member = await membersBLL.getMemberById(id);
    res.json(member);
  });
  
  // Add a new member
  router.route('/').post(async (req, res) => {
    const obj = req.body;
    const result = await membersBLL.addMember(obj);
    res.status(201).json(result);
  });
  
  // Update a member
  router.route('/:id').put(async (req, res) => {
    try {
      const { id } = req.params;
      const obj = req.body;
      const result = await membersBLL.updateMember(id, obj);
      res.json(result);
    } catch (error) {
      res.status(500).json('There was an error!');
    }
  });
  
  // Delete a member
  router.route('/:id').delete(async (req, res) => {
    const { id } = req.params;
    const result = await membersBLL.deleteMember(id);
    res.json(result);
  });
  
  module.exports = router;
  
  
  