const { app } = require('@azure/functions');

app.storageQueue('storageQueueTrigger1', {
    queueName: 'js-queue-items',
    connection: 'AzureWebJobsStorage',
    handler: (queueItem, context) => {
        context.log('Storage queue function processed work item:', queueItem);
    }
});
