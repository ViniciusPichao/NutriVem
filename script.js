function analisar() {
  let jejum = parseFloat(document.getElementById("jejum").value);
  let pos = parseFloat(document.getElementById("pos").value);
  let hba1c = parseFloat(document.getElementById("hba1c").value);

  let resultado = document.getElementById("resultado");

  if (!jejum || !pos || !hba1c) {
    resultado.innerHTML = "Preencha todos os campos!";
    return;
  }

  let classificacao = "";
  let dieta = "";

  // Classificação básica (referência simplificada)
  if (hba1c < 5.7 && jejum < 100) {
    classificacao = "✅ Normal";
    dieta = dietaSaudavel();
  } 
  else if (hba1c >= 5.7 && hba1c <= 6.4) {
    classificacao = "⚠️ Pré-diabetes";
    dieta = dietaPreDiabetes();
  } 
  else {
    classificacao = "🚨 Possível Diabetes";
    dieta = dietaDiabetes();
  }

  resultado.innerHTML = `
    <h3>Resultado: ${classificacao}</h3>
    <p><strong>Recomendações:</strong></p>
    ${dieta}
  `;
}

// DIETAS

function dietaSaudavel() {
  return `
    <ul>
      <li>✔️ Manter alimentação equilibrada</li>
      <li>✔️ Frutas: maçã, banana, morango</li>
      <li>✔️ Proteínas: frango, peixe, ovos</li>
      <li>✔️ Carboidratos bons: arroz integral, aveia</li>
      <li>✔️ Evitar excesso de açúcar</li>
    </ul>
  `;
}

function dietaPreDiabetes() {
  return `
    <ul>
      <li>⚠️ Reduzir açúcar e farinha branca</li>
      <li>✔️ Comer mais fibras (aveia, chia, linhaça)</li>
      <li>✔️ Frutas com baixo índice glicêmico (morango, maçã)</li>
      <li>✔️ Proteínas magras (frango, peixe)</li>
      <li>✔️ Evitar refrigerantes e doces</li>
      <li>✔️ Substituir açúcar por adoçantes naturais</li>
    </ul>
  `;
}

function dietaDiabetes() {
  return `
    <ul>
      <li>🚫 Cortar açúcar refinado</li>
      <li>🚫 Evitar refrigerantes e doces</li>
      <li>✔️ Comer legumes e verduras diariamente</li>
      <li>✔️ Frutas controladas (maçã, pera)</li>
      <li>✔️ Proteínas: ovos, peixe, frango</li>
      <li>✔️ Carboidratos complexos (batata doce, arroz integral)</li>
      <li>✔️ Beber bastante água</li>
      <li>✔️ Consultar médico regularmente</li>
    </ul>
  `;
}

