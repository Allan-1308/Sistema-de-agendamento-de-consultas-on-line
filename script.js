document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formAgendamento');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const idade = document.getElementById('idade').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const especialidade = document.getElementById('especialidade').value;
    const conveniado = document.querySelector('input[name="conveniado"]:checked')?.value;
    const servicos = Array.from(document.querySelectorAll('input[name="servico"]:checked')).map(el => el.value);
    const sintomas = document.getElementById('sintomas').value.trim();
    const medico = document.getElementById('medico').value;

    // Validação de data (não permitir datas passadas)
    const hoje = new Date().toISOString().split('T')[0];
    if (data < hoje) {
      alert('A data da consulta não pode ser anterior a hoje.');
      return;
    }

    // Criar objeto da consulta
    const consulta = {
      nome,
      email,
      telefone,
      idade,
      data,
      hora,
      especialidade,
      conveniado,
      servicos,
      sintomas,
      medico
    };

    // Obter lista de consultas no localStorage
    const consultas = JSON.parse(localStorage.getItem('consultas')) || [];

    // Adicionar nova consulta
    consultas.push(consulta);

    // Salvar no localStorage
    localStorage.setItem('consultas', JSON.stringify(consultas));

    alert('Consulta agendada com sucesso!');

    form.reset();
  });
});
