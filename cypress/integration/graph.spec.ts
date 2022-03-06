describe('沖縄のグラフを表示する', () => {
  it('サイトにアクセスする', () => {
    cy.visit('/');
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

describe('沖縄のグラフを表示し、非表示にする', () => {
  it('サイトにアクセスする', () => {
    cy.visit('/');
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
  it('沖縄のグラフが非表示になる', () => {
    cy.get('[id="47"]')
      .click()
      .get('.recharts-legend-item-text')
      .should('not.exist');
  });
});

describe('沖縄のグラフを表示し、非表示、そして表示する', () => {
  it('サイトにアクセスする', () => {
    cy.visit('/');
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
  it('沖縄のグラフが非表示になる', () => {
    cy.get('[id="47"]')
      .click()
      .get('.recharts-legend-item-text')
      .should('not.exist');
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

describe('沖縄と北海道のグラフを表示する', () => {
  it('サイトにアクセスする', () => {
    cy.visit('/');
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
  it('沖縄と北海道のグラフが表示される', () => {
    cy.get('[id="1"]')
      .click()
      .get('.recharts-legend-item-text')
      .should(($labels) => {
        expect($labels, 'ラベルに2件表示').to.have.length(2);
        expect(
          $labels.eq(0),
          '0番目のラベルに表示されているのが沖縄',
        ).to.contain('沖縄県');
        expect(
          $labels.eq(1),
          '1番目のラベルに表示されているのが北海道',
        ).to.contain('北海道');
      });
  });
});

describe('沖縄と北海道のグラフを表示してから、沖縄を非表示にする', () => {
  it('サイトにアクセスする', () => {
    cy.visit('/');
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
  it('沖縄と北海道のグラフが表示される', () => {
    cy.get('[id="1"]')
      .click()
      .get('.recharts-legend-item-text')
      .should(($labels) => {
        expect($labels, 'ラベルに2件表示').to.have.length(2);
        expect(
          $labels.eq(0),
          '0番目のラベルに表示されているのが沖縄',
        ).to.contain('沖縄県');
        expect(
          $labels.eq(1),
          '1番目のラベルに表示されているのが北海道',
        ).to.contain('北海道');
      });
  });
  it('沖縄のグラフが消え、北海道のグラフが表示される', () => {
    cy.get('[id="47"]')
      .click()
      .get('.recharts-legend-item-text')
      .should(($labels) => {
        expect($labels, 'ラベルに1件表示').to.have.length(1);
        expect(
          $labels.eq(0),
          '0番目のラベルに表示されているのが北海道',
        ).to.contain('北海道');
      });
  });
});

describe('上から10件のグラフを表示する', () => {
  it('サイトにアクセスする', () => {
    cy.visit('/');
  });
  it('10個のボタンを押す', () => {
    cy.wait(500)
      .get('input')
      .each(($item, $index) => {
        if ($index < 10) cy.wrap($item).click();
      });
  });
  it('10件のグラフが表示される', () => {
    cy.get('.recharts-legend-item-text').should(($labels) => {
      expect($labels, 'ラベルに10件表示').to.have.length(10);
    });
  });
});
