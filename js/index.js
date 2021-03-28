async function leerJSON(url) {
    try {
      let response = await fetch(url);
      let user = await response.json();
      return user;
    } catch (err) {
      alert(err);
    }
  }
  
  function mostrar() {
    var url = "https://raw.githubusercontent.com/susanart/mundialrusia/main/partidos.json";
    var table = "";
        leerJSON(url).then((partidos) => {
        partidos.forEach((partidos1) => {
          table += `
              <tr>
                <td>${partidos1.fecha}</td>
                <td>${partidos1.equipo1}</td>
                <td>${partidos1.equipo2}</td>
                
                
              </tr>
            `;
        });
        document.getElementById("contenido").innerHTML = table;
      })
  }
  
  function mostrarPartidos(partidos) {
    let msj = "";
    let c = 1;
    for (var i in partidos) {
      msj += "<option value=" + c++ + ">" + partidos[i] + " - " + i + "</option>";
    }
    return msj;
  }
  mostrar();

  $("#selh3").click(function(event){
    $("#contenedor").load('selecciones/colombia.html');
  });
