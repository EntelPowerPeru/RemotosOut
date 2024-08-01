const EVENTOS = {
    init() {
        this.seleccionarTipoCliente();
    },
    seleccionarTipoCliente() {
        $("body").on("change", "#filtro_cliente, #filtro_pedido, #filtro_canal", (evento) => {
            const valorCliente = $("#filtro_cliente").val();
            const valorPedido = $("#filtro_pedido").val();
            const valorCanal = $("#filtro_canal").val();

            $(".tabla_cliente_canal").addClass("d-none");

            if (!valorCliente || !valorPedido || !valorCanal) {
                return false;
            }

            const cliente = valorCliente === "1" ? "nuevo" : "entel";
            const pedido = valorPedido === "1" ? "monopedido" : "multipedido";
            const canal = valorCanal === "1" ? "claro" : valorCanal === "2" ? "movistar" : valorCanal === "3" ? "bitel" : "regular";

            if (valorCliente === "1") {
                $(".lbl-transaccion").html("Portabilidad");
            } else {
                $(".lbl-transaccion").html("Portabilidad y Venta Regular");
            }

            $(`#tb_${cliente}_${pedido}_${canal}`).removeClass("d-none");
        });
    }
};

(() => {
    EVENTOS.init();
})();