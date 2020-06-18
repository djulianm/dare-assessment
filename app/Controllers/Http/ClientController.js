'use strict'

const axios = use('axios');

class ClientController {

    async list({request, response, auth}) {
        const req = await axios.get('http://www.mocky.io/v2/5808862710000087232b75ac');
        
        return req.data;
    }

    async detail({request, response, auth}) {
        const req = await axios.get('http://www.mocky.io/v2/5808862710000087232b75ac');

        let client = req.data.clients.find(element => element.id === request.params.id);

        if (!client) {
            return response.status(404).send({ message: 'Client not found.'});
        }

        return client;
    }
}

module.exports = ClientController
