describe('デプロイできているかを確認する', () => {
  it('サイトにアクセスする', () => {
    cy.visit('https://population-transition-app-mocha.vercel.app/');
  });
  it('沖縄のグラフが表示される', () => {
    cy.get('[id="47"]')
      .click()
      .get('.recharts-legend-item-text')
      .should(($labels) => {
        expect($labels, 'ラベルに1件表示').to.have.length(1);
        expect(
          $labels.eq(0),
          '0番目のラベルに表示されているのが沖縄',
        ).to.contain('沖縄県');
      });
  });
});
