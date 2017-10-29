var cargarPagina = function(){

  $.ajax({
    url: "http://10.10.2.60:8081/get/inversion/30000",
  }).done(function(res) {
  console.log(res)
  });
}
$(document).ready(cargarPagina);
