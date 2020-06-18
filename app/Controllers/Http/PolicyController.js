'use strict'

const axios = use('axios');

class PolicyController {

    async list({request, response, auth}) {
        const req = await axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5');
        
        return req.data;
    }

    async detail({request, response, auth}) {
        const req = await axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5');

        let policy = req.data.policies.find(element => element.id === request.params.id);

        if (!policy) {
            return response.status(404).send({ message: 'Policy not found.'});
        }

        return policy;
    }

}

module.exports = PolicyController
