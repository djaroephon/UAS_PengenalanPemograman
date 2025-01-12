const barang = require('./barang')

class barangElektrik extends barang{
    #merek 

    constructor(id,nama,harga,merek){
        super(id,nama,harga) 
        this.#merek = merek 
    }

    getMerek(){
        return this.#merek
    }

    deskripsi(){
        return `Barang Elektronik: ${this.getNama()} dengan merk ${this.#merek}`
    }
}

module.exports = barangElektrik


