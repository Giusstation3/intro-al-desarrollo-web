function guardarInfor() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const dia = document.getElementById("diaFavorito").value;
  localStorage.setItem("informacionUsuario", JSON.stringify({ nombre, edad, diaFavorito: dia }));

  if (nombre) {
    document.getElementById("resultado").textContent =
      "Nombre guardado en localStorage";
  } else {
    {
      document.getElementById("resultado").textContent =
        "Por favor, ingresa un nombre";
    }
  }
}

window.onload = function () {
  const informacion = localStorage.getItem("informacionUsuario");

  if (!informacion) {
    document.getElementById("resultado").textContent = "";
    return;
  }

  const { nombre, edad, diaFavorito } = JSON.parse(informacion);
  document.getElementById("resultado").textContent =
    "Hola " +
    nombre +
    ", tienes " +
    edad +
    " años, tu día de la semana favorito es " +
    diaFavorito;
};
