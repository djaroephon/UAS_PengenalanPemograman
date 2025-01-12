class barang{
    #id
    #nama
    #harga

    constructor(id,nama,harga){
        this.#id = id
        this.#nama = nama
        this.#harga = harga
    }

    getID(){
        return this.#id
    }
    getNama(){
        return this.#nama
    } 
    getHarga(){
        return this.#harga
    }

    deskripsi(){
        throw new Error("deskripsi harus ada")
    }
}

module.exports = barang