'use strict';

module.exports.hello = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: `Hola  ${event.pathParameters.name}!`,
                input: event.name,
            },
            null,
            2
        ),
    };
};

module.exports.showUser = async event => {
    const body = JSON.parse(event.body);
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: `POST request`,
                input: body,
            },
            null,
            2
        ),
    };
};
