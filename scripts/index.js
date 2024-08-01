const EVENTOS = {
    init() {
        this.seleccionarCanal();
    },
    seleccionarCanal() {
        $("body").on("change", "#filtro_canal", (evento) => {
            if (!$(evento.currentTarget).val()) {
                return false;
            }

            const valor = $(evento.currentTarget).val();

            switch (valor) {
                case "1":
                    window.location = "./tlv-outbound.html";
                    break;
                case "2":
                    window.location = "./fidelizacion.html";
                    break;
                case "3":
                    window.location = "./fonocompras-fonoislas.html";
                    break;
                case "4":
                    window.location = "./digital-asistido-web.html";
                    break;
                case "5":
                    window.location = "./digital-asistido-app.html";
                    break;
                case "6":
                    window.location = "./whatsapp-rrss.html";
                    break;

                case "7":
                    window.location = "./cal-in.html";
                    break;

                case "8":
                    window.location = "./digital-100-ecommerce.html";
                    break;

                case "9":
                    window.location = "./digital-100-app.html";
                    break;

            }
        });
    }
};

(() => {
    EVENTOS.init();
})();