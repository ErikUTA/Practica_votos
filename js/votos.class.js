class contarVotos{
    favor = 0;
    contra = 0;  
    abstencion = 0;
    propuestas = '';

    mostrarResultados(favor, contra, abstencion, propuestas) {
        const div = document.createElement('div');
        div.innerHTML= `<div class="alert alert-dark alert-dismissible fade show mt-3" role="alert">
                            <h2>Resultados:</h1>
                            <table class="table table-striped mt-2 mx-2">
                                <tr>
                                    <td>Votos a favor: ${favor}</td>
                                </tr>
                                <tr>
                                    <td>Votos en contra: ${contra}</td>
                                </tr>
                                <tr>
                                    <td>Se abstienen de responder: ${abstencion}</td>
                                </tr>
                                <tr>
                                    <td>Propuesta: ${propuestas}</td>
                                </tr>
                            </table>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>`
        return div;
    }

}
