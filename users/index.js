const app = require('express')();

app.use('/api', require('./routes'));

const server = app.listen(
    process.env.PORT,
    _ =>
        process.env.NODE_ENV !== 'production' &&
        console.log(`SERVER PORT: ${server.address().port}`),
);
