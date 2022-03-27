// essa função espera o navegador tá pronto para iniciar
$(function(){
    $('#calc').click(function(){
      // quando pegamos o val vem como texto
      //necessario fazer a conversão
      const milhas = parseFloat($('#milhas').val())//se eu não passar nada ele recebe
      const metros =  1609.34 * milhas

      // devolver o valor para a tela
      $('#metros').val(metros)
    
    })

  })