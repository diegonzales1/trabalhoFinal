export function geradorDeTagsDeIdentificacao(nome) {
  console.log(`Gerando tag de identificação para o pet: ${nome}`);
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  console.log(
    `Verificando se o pet pode ser adotado, idade: ${idade}, porte: ${porte}`,
  );
  if ((idade = 1 && porte.toUpperCase() === 'M')) {
    return true;
  } else {
    return false;
  }
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  console.log(
    `Calculando o consumo de ração para ${nome}, idade: ${idade} anos, peso: ${peso} kg`,
  );
  return peso * 300;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  console.log(`Decidindo atividade para o porte: ${porte}`);
  switch (porte.toLowerCase()) {
    case 'pequeno':
      return 'brincar dentro de casa';
    case 'medio':
      return 'brincar dentro de casa e passear';
    case 'grande':
      return 'brincar no quintal e corrida no campo';
    default:
      return 'Porte inválido, por favor, informe pequeno, médio ou grande';
  }
}

export async function buscarDadoAsync() {
  console.log('Buscando dado de exemplo de forma assíncrona...');
  return 'Pipoca';
}
