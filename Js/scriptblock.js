// função para avançar a página

function nextPage(currentPageId, nextPageId) {
    const currentPage = document.getElementById(currentPageId);
    const nextPage = document.getElementById(nextPageId);
    
    currentPage.classList.remove('active');
    nextPage.classList.add('active');
  }

// função para retornar a página

function previousPage(currentPageId, previousPageId) {
    const currentPage = document.getElementById(currentPageId);
    const previousPage = document.getElementById(previousPageId);
    
    currentPage.classList.remove('active');
    previousPage.classList.add('active');
};

//função para concluir a inscrição