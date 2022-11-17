async function CreateAuction(event, context) {
    const { title } = JSON.parse(event.body);

    const now = new Date();

    const Auction = {
        title,
        status: 'OPEN',
        createdAt: now.toISOString(),
    };

    return {
        statusCode: 201,
        body: JSON.stringify({ Auction }),
    };
}

export const handler = CreateAuction;
