const EVENTOS = {
    init() {
        this.seleccionarTipoCliente();
    },
    seleccionarTipoCliente() {
        $("body").on("change", "#filtro_cliente, #filtro_canal", (evento) => {
            const valorCliente = $("#filtro_cliente").val();
            const valorCanal = $("#filtro_canal").val();

            if (valorCanal === "4") {
                switch (valorCliente) {
                    case "1":
                        $("#tb_nuevo").removeClass("d-none");
                        $("#tb_entel").addClass("d-none");
                        break;
                    case "2":
                        $("#tb_nuevo").addClass("d-none");
                        $("#tb_entel").removeClass("d-none");
                        break;
                    default:
                        $("#tb_nuevo").addClass("d-none");
                        $("#tb_entel").addClass("d-none");
                }
            } else {
                $("#tb_nuevo").addClass("d-none");
                $("#tb_entel").addClass("d-none");
            }
        });
    }
};

(() => {
    EVENTOS.init();
})();