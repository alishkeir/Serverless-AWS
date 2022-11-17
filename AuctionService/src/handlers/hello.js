async function hello(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello! This is Ali Shkeir' }),
    };
}

export const handler = hello;
