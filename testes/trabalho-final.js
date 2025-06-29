import assert from 'node:assert';

import {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
} from './trabalho.js';

describe('Testes da disciplina - fundamentos JS', function() {
  
  it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', function() {
    assert.strictEqual(geradorDeTagsDeIdentificacao('Pantera'), 'PANTERA');
  });

  it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', function() {
    assert.strictEqual(verificarSePodeSerAdotado(1, 'M'), true)
  })

  it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', function() {
    assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 14.5), 4350)
  });

  it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', function() {
    assert.strictEqual(decidirTipoDeAtividadePorPorte('pequeno'), 'brincar dentro de casa')
  });

  it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async function() {
    const resultado = await buscarDadoAsync();
    assert.strictEqual(resultado, 'Pipoca');
  });

});