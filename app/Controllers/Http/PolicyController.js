'use strict'

const axios = use('axios');

class PolicyController {

    async getPolicies() {
        const policies = await axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5');

        if (!policies || !policies.data.lenght === 0) {
            return response.status(404).send({ message: 'Cannot retrieve policies.'});
        }

        return policies.data;
    }

    async list({request, response, auth}) {
        const {id, role} = auth.user;

        if (role != 'admin') {
            return response.status(404).send({ message: "You don't have access to this method."});
        }
        
        return await this.getPolicies();
    }

    async detail({request, response, auth}) {

        const {id, role} = auth.user;

        if (role != 'admin') {
            return response.status(404).send({ message: "You don't have access to this method."});
        }

        const data = await this.getPolicies();
        let policy = data.policies.filter(element => element.id === request.params.id || element.clientId === request.params.id);

        if (!policy) {
            return response.status(404).send({ message: 'Policy not found.'});
        }

        return policy;
    }


}

module.exports = PolicyController
