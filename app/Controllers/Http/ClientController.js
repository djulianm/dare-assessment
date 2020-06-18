'use strict'

const axios = use('axios');

class ClientController {

    async getClients() {

        const clients = await axios.get('http://www.mocky.io/v2/5808862710000087232b75ac');

        if (!clients || !clients.data.lenght === 0) {
            return response.status(404).send({ message: 'Cannot retrieve clients.'});
        }

        return clients.data;
    }

    async list({request, response, auth}) {
        return await this.getClients();
    }

    async detail({request, response, auth}) {

        const data = await this.getClients();
        let client = data.clients.filter(element => element.id === request.params.id || element.name === request.params.id);

        if (!client) {
            return response.status(404).send({ message: 'Client not found.'});
        }

        return client;
    }
}

module.exports = ClientController
