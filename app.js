const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Nuevo endpoint para sumar números
// Ejemplo de uso: GET /sum?nums=1,2,3,4 o GET /sum?nums=1&nums=2&nums=3
app.get('/sum', (req, res) => {
  let nums = req.query.nums;
  if (!nums) {
    return res.status(400).send({ error: 'No se han proporcionado números.' });
  }
  
  // Si se recibe como string "1,2,3", convertirlo a array
  if (!Array.isArray(nums)) {
    nums = nums.split(',');
  }
  
  let total = 0;
  for (const num of nums) {
    const valor = parseFloat(num);
    if (isNaN(valor)) {
      return res.status(400).send({ error: `El valor '${num}' no es un número válido.` });
    }
    total += valor;
  }
  
  res.send({ total });
});


// Metodo POST para autenticar usuario con un body JSON que incluya user y password 
app.post('/login', (req, res) => {
  const { user, password } = req.body;
  if (!user || !password) {
    return res.status(400).json({ error: 'Se requieren "user" y "password".' });
  }
  res.json({ user, password });
});

module.exports = app;