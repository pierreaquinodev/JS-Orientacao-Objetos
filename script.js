class Produto {
    constructor() {
        this.id = 1;
        this.arrayDeProdutos = [];
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            this.adicionar(produto);
        }
        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";
        //Listando Array dinamicamente
        for (let i = 0; i < this.arrayDeProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayDeProdutos[i].id;
            td_produto.innerText = this.arrayDeProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayDeProdutos[i].valorProduto;

            let imgEdit = document.createElement("img");
            imgEdit.src = "assets/imgs/edit.png";

            let imgDelete = document.createElement("img");
            imgDelete.src = "assets/imgs/delete.png";
            imgDelete.setAttribute(
                "onclick",
                "produto.deletar(" + this.arrayDeProdutos[i].id + ")"
            );

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    }

    adicionar(produto) {
        this.arrayDeProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        let produto = {};

        produto.id = this.id;
        produto.nomeProduto = document.getElementById("produto").value;
        produto.valorProduto = document.getElementById("valor").value;

        return produto;
    }
    validaCampos(produto) {
        let msg = "";
        if (produto.nomeProduto == "") {
            msg += "O campo nome deve ser preenchido. \n";
        }
        if (produto.valorProduto == "") {
            msg += "O campo valor deve ser preenchido. \n";
        }
        if (msg != "") {
            alert(msg);
            return false;
        }
        return true;
    }

    cancelar() {
        document.getElementById("produto").value = "";
        document.getElementById("valor").value = "";
    }
    deletar(id) {
        console.log(this.arrayDeProdutos);

        if (confirm("Deseja deletar o produto com id " + id + " ?")) {
            for (let i = 0; i < this.arrayDeProdutos.length; i++) {
                if (this.arrayDeProdutos[i].id == id) {
                    this.arrayDeProdutos.splice(i, 1);
                    this.listaTabela();
                }
            }
        }
    }
}

let produto = new Produto();
