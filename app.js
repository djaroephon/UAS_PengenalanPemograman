const express = require('express');
const app = express();
const barangController = require('./controller/barangController');
const cors = require('cors');
const PORT = 5000
app.use(express.json());
app.use(cors()); 

// Rute CRUD
app.get('/barang', barangController.getBarang);
app.get('/barang/:id', barangController.getBarangById);
app.post('/barang', barangController.createBarang);
app.put('/barang/:id', barangController.updateBarang);
app.delete('/barang/:id', barangController.deleteBarang);

app.listen(PORT, () => {
  console.log('Server berjalan di port' + PORT);
});
