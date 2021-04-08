class Allocator {

    constructor() {
        this.servers = [];
    }

    // given a server type ('API', 'DB', etc) allocate a new server and
    // return the name of the server (e.g. 'API1', 'API2', 'DB5')
    allocate(serverType) {
        let count = this.findAvailableIndex(serverType)
        const serverName = serverType + count
        console.log('Adding server ' + serverName)
        this.servers.push(serverName)
    }

    // given a server name, remove the server from the pool
    deallocate(serverName) {
        console.log('Removing server ' + serverName)
        this.servers = this.servers.filter(e => e !== serverName)
    }

    findAvailableIndex(serverType) {
        let count = 0

        this.servers.forEach(element => {
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

    findAll() {
       return this.servers
    }

    print() {
       console.log(findAll())
    }
}

module.exports = Allocator;