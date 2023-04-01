class Cotizador {
    constructor 
    (costoPorCadaClase, multiCategoria, multiZona ) 
    {
        this.costoClase = costoPorCadaClase 
        this.multiCate = multiCategoria
        this.multiZo= multiZona
        this.costoPorClase = costoPorClase 

    }

    calcular () 
    {
        let calculo = (costoPorCadaClase * this.multiCate * this.multiZo * this.costoPorClase) 
        return calculo 
    }
    } 
    
