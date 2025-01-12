const db = require('../database/conn')
const barang = require('../models/barang')
const barangelektrik = require('../models/barangElektronik')


exports.getBarang = (req , res) =>{
    sql = 'SELECT * FROM barang'
    db.query(sql, (err , hasil)=>{
        if(err){
            return res.status(500).json({
                message: 'Error, tidak dapat ambil data '
            })
        }
        res.status(200).json({
            message:"Success ambil data",
            barang: hasil
        })
    })
}

exports.getBarangById = (req, res) => {
  const { id } = req.params;  
  const sql = 'SELECT * FROM barang WHERE id = ?';  

  db.query(sql, [id], (err, hasil) => {
    if (err) {
      console.error('Error saat mengambil data barang:', err);
      return res.status(500).json({ message: 'Gagal mengambil data barang' });
    }
    if (hasil.length === 0) {
      return res.status(404).json({ message: 'Barang tidak ditemukan' });
    }

    
    res.json({ data: hasil[0] });
  });
};

exports.createBarang = (req, res) => {
  const { nama, harga, merek } = req.body;

  if (!nama || !harga || !merek) {
    return res.status(400).json({
      message: 'Semua field (nama, harga, merek) harus diisi.',
    });
  }

  console.log("Data input:", { nama, harga, merek });

  const barang = new barangelektrik(null, nama, harga, merek);
  const sql = 'INSERT INTO barang (nama, harga, merek) VALUES (?, ?, ?)';

  db.query(sql, [barang.getNama(), barang.getHarga(), barang.getMerek()], (err, hasil) => {
    if (err) {
      console.error("Error saat menambah barang:", err);
      return res.status(500).json({ message: 'Error tambah barang' });
    }
    res.status(201).json({
      message: 'Tambah barang successfully',
    });
  });
};

exports.updateBarang = (req, res) => {
    const { id } = req.params;
    const { nama, harga, merek } = req.body;
    const barang = new barangelektrik(id, nama, harga, merek);
    const sql = 'UPDATE barang SET nama = ?, harga = ?, merek = ? WHERE id = ?';
    
    db.query(sql, [barang.getNama(), barang.getHarga(), barang.getMerek(), id], (err, result) => {
        if (err) {
            console.error('Error while updating barang:', err); 
            return res.status(500).json({ message: 'Error update barang', error: err });
        }
        res.status(201).json({ message: 'Barang update successfully' });
    });
};

exports.deleteBarang = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM barang WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error hapus barang' });
      }
      res.status(200).json({ message: 'Hapus barang successfully' });
    });
  };