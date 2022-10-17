const app = require("./app/app");
require("./app/config/connection");
app.listen(app.get("port"), () => {
  console.log(
    "🌎 ~ host: Server running on: => http://127.0.0.1:" + app.get("port")
  );
});
