const app = require("./app").app;
let port = process.env.PORT || 5000;
app.listen(port);
