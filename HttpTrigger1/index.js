const { CommunicationIdentityClient } = require('@azure/communication-identity');
const connectionString = 'endpoint=https://mpteamsintg.communication.azure.com/;accesskey=dBSWN8MjnhILb755dYqnVEm/woOVqNNsLXjeGhX8LGPt+CmCIF5BTDSkLhQpc6MhwyLiWFadwzvwKw6RX04Ntg=='

module.exports = async function (context, req) {

    let tokenClient = new CommunicationIdentityClient(connectionString);

    const user = await tokenClient.createUser();

    const userToken = await tokenClient.getToken(user, ["voip"]);

    context.res = {
        body: userToken
    };
}