const app = require('./app');
const port = 8000;

(async () => {
  
  console.log('starting server');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();