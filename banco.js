
let Banco = {
    conta: "2343-2",
    saldo: 107.5,
    tipoConta: "Conta Corrente",
    agencia: "1130",

    buscarSaldo: function () {
        return this.saldo;
    },

    deposito: function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            return "Depósito de R$" + valor + " realizado com sucesso. Novo saldo: R$" + this.saldo;
        } else {
            return "Valor inválido para depósito.";
        }
    },

    saque: function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return "Saque de R$" + valor + " realizado. Saldo Atual: R$" + this.saldo;
        } else {
            return "Saldo insuficiente: ";
        }
    },

    numeroDaConta: function () {
        return this.conta;
    }
};

console.log("Número da Conta: " + Banco.numeroDaConta());
console.log("Saldo Atual: R$" + Banco.buscarSaldo());
console.log(Banco.deposito(500));
console.log(Banco.saque(200));
