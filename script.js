function calcularMedia() {
  const nota1 = Number(document.getElementById("nota1").value);
  const nota2 = Number(document.getElementById("nota2").value);
  const nota3 = Number(document.getElementById("nota3").value);
  const resultado = document.getElementById("resultado");

  for (const campo of ["nota1", "nota2", "nota3"]) {
    const valor = document.getElementById(campo).value;
    if (valor === "" || Number(valor) < 0 || Number(valor) > 10) {
      resultado.textContent = "Digite todas as notas entre 0 e 10.";
      return;
    }
  }

  const media = (nota1 + nota2 + nota3) / 3;
  if (media >= 7) {
    resultado.textContent = `Média: ${media.toFixed(1)} — Aprovado!`;
  } else {
    resultado.textContent = `Média: ${media.toFixed(1)} — Reprovado.`;
  }
}
