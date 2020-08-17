const express = require('../config/express');
const app = express();
const port = app.get('port');

//** API ROUTES **//
const users = require('../api/routes/users.js');

app.use('/users', users);

//**  _______  **//

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
