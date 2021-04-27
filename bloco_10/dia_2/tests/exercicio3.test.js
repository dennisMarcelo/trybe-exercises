const { getRepos } = require('../exercicio3');


describe('exercise 3 tests with promises', () => {
    it('O repositório sd-01-week4-5-project-todo-list esta dentro da lista de repositórios', async () => {
        getRepos('https://api.github.com/orgs/tryber/repos').then((repositorios) => {
            expect(repositorios).toContain('sd-01-week4-5-project-todo-list');
            expect(repositorios).toContain('sd-01-week4-5-project-meme-generator')
        })
    })
});