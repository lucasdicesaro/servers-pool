const express = require('express')
const router = express.Router()

servers = []

router.get('/', (req, res) => {
    res.json(servers)
})

router.post('/', async (req, res) => {

    let serverType
    if (req.body.serverType != null) {
        serverType = req.body.serverType;
    } else {
        res.status(404).json({ message: 'Missing arguments error: serverType' })
        return
    }

    try {
        const count = await findAvailableIndex(serverType)
        const serverName = serverType + count
        console.log('Adding server ' + serverName)
        servers.push(serverName)
        res.json({ message: 'Added server ' + serverName })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

router.delete('/name/:serverName', async (req, res) => {

    let serverName = req.params.serverName
    console.log('Removing server ' + serverName)
    try {

        let itemIndex = servers.indexOf(serverName)
        if (itemIndex != -1) {
            servers.splice(itemIndex, 1)
        } else {
            console.log('Server not found ' + serverName)
            res.status(404).json({ message: 'Server not found ' + serverName })
            return
        }

        res.json({ message: 'Removed server ' + serverName })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

async function findAvailableIndex(serverType) {
    let count = 0

    servers.forEach(element => {
        const serverName = serverType + count
        if (element.startsWith(serverType)) {
            if (element === serverName)
                count++
            else
                return count
        }
    });
    return count
}

module.exports = router