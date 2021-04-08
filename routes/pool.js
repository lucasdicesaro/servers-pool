const express = require('express')
const Allocator = require('../service/allocator')
const router = express.Router()

router.get('/', (req, res) => {

    // TODO integrate REST API (route/allocator.js) with Allocator class (service/allocator.js)
    a = new Allocator()
    a.allocate('DB')
    a.print()
    a.allocate('API')
    a.print()
    a.allocate('API')
    a.print()
    a.allocate('DB')
    a.print()
    a.deallocate('DB0')
    a.print()
    a.allocate('DB')
    a.print()
    res.json({ message: 'Ok'})
})

module.exports = router