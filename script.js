class Produto {
    constructor() {
        this.id = 0;
        this.nomeProd = "";
        this.valor = 0;
    }

    adicionar() {
        alert("Produto adicionado com sucesso!");
        //Regra de negocio
    }
    excluir() {
        alert("Produto excluido com sucesso!");
        //Regra de negocio
    }
}

let produto = new Produto();
