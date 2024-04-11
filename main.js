$(document).ready(function() {

    // botão que mostra somente o form
    $('#new-task-button').click(function() {
        $('form').slideDown();
    })

    // botão que mostra somente as tarefas já criadas
    $('#see-task-button').click(function() {
            $('ul').slideDown();
    })

    // botão do header que esconde tudo da página
    $('#cancel-button-header').click(function() {
        $('form').slideUp();
        $('ul').slideUp();
    })

    // botão do form que esconde o form
    $('#cancel-button-form').click(function() {
        $('form').slideUp();
    })

    // funcão responsável pela criação da lista
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val(); // recupera o valor da id e o coloca numa const
        const novoItem = $('<li></li>'); // estabelece o elemento que será trabalhado

        $(`
            <li><span class="task-name">${novaTarefa}</span><span class="ações-tarefa"><button class="complete-button">Concluir</button><button class="delete-button">Excluir</button></span></li>
            `).appendTo(novoItem); //cria um novo elemento com botões de concluir e excluir

        $(novoItem).appendTo('ul'); // colocando a nova linha na lista
        $('ul').slideDown(); // mostra a lista com todos os items
        $('#nome-tarefa').val(''); // resetando o valor do id
    })

    // funcão responsável pela marca de completo no item
    $(document).on('click', '.complete-button', function() {
        $(this).closest('li').find('.task-name').toggleClass('completed');
    })

    // funcão responsável pela remoção do item
    $(document).on('click', '.delete-button', function() {
        $(this).closest('li').remove();
    })


})