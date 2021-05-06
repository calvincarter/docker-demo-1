const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});