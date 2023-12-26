function converterParaReal(numero:number) {
    const valorEmCentavos = numero / 100; 
    const valorFormatado = valorEmCentavos.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
    return valorFormatado;
  }

export{ converterParaReal}