const EVENTOS = {
    init() {
        this.seleccionarTipoCliente();
    },
    seleccionarTipoCliente() {
        $("body").on("change", "#filtro_cliente, #filtro_canal", (evento) => {
            const valorCliente = $("#filtro_cliente").val();
            const valorCanal = $("#filtro_canal").val();

            $(".tabla_cliente_canal").addClass("d-none");

            if (!valorCliente || !valorCanal) {
                return false;
            }

            const cliente = valorCliente === "1" ? "nuevo" : "entel";
            const canal = valorCanal === "1" ? "claro" : valorCanal === "2" ? "movistar" : valorCanal === "3" ? "bitel" : "regular";

            if (valorCliente === "1") {
                $(".lbl-transaccion").html("Portabilidad");
            } else {
                $(".lbl-transaccion").html("Portabilidad y Venta Regular");
            }

            $(`#tb_${cliente}_${canal}`).removeClass("d-none");
        });
    }
};

(() => {
    EVENTOS.init();
})();