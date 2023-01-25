const { CommunicationIdentityClient } = require('@azure/communication-identity');
    const connectionString = 'endpoint=https://msteamsdemo.communication.azure.com/;accesskey=SbGm0T3r3+WnbkQhbFu7tuIJKv0iygFCdjjhkfT4s8dvveVd1geICLXuiW4wBKHJ5qoMqF5nSpro6aj25DipHw=='
    const acsEndpoint = "https://msteamsdemo.communication.azure.com/"
    
    module.exports = async function (context, req) {
        let tokenClient = new CommunicationIdentityClient(connectionString);
    
        const userIDHolder = await tokenClient.createUser();
        const userId = userIDHolder.communicationUserId
    
        const userToken = await (await tokenClient.getToken(userIDHolder, ["chat"])).token;
    
        context.res = {
            body: {
                acsEndpoint,
                userId,
                userToken
            }
        };
    }