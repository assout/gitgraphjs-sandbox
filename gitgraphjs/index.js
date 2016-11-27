// const myTemplateConfig = {
//   // colors: [ "#F00", "#0F0", "#00F" ], // branches colors, 1 per column
//   // branch: {
//   //   lineWidth: 8,
//   //   spacingX: 50,
//   //   showLabel: true,                  // display branch names on graph
//   // },
//   commit: {
//     // spacingY: -80,
//     // dot: {
//     //   size: 12
//     // },
//     message: {
//       displayAuthor: true,
//       // displayBranch: false,
//       displayHash: false,
//       // font: "normal 12pt Arial"
//     },
//     // shouldDisplayTooltipsInCompactMode: false, // default = true
//     // tooltipHTMLFormatter: function ( commit ) {
//     //   return "" + commit.sha1 + "" + ": " + commit.message;
//     // }
//   }
// };
// const myTemplate = new GitGraph.Template( myTemplateConfig );

{
  const g = new GitGraph({
    elementId: "normal",
    template: 'blackarrow',
    orientation: 'vertical-reverse'
  });

  const m = g.branch('master');
  m.commit("最初のコミット");

  const a = m.branch('A機能開発');
  a.commit("機能追加").commit("テストケース追加");

  a.merge(m);

  const b = m.branch("B機能開発");
  b.commit("機能追加").commit("テストケース追加");

  b.merge(m);
}


{
  const g = new GitGraph({
    elementId: "parallel",
    template: 'blackarrow',
    orientation: 'vertical-reverse'
  });

  const m = g.branch('master');
  m.commit("最初のコミット");

  const a = m.branch('A機能開発');
  const b = m.branch("B機能開発");

  a.commit("機能追加").commit("テストケース追加");
  b.commit("機能追加").commit("テストケース追加");

  b.merge(m);
  a.merge(m);

}

{
  const g = new GitGraph({
    elementId: "to_master",
    template: 'blackarrow',
    orientation: 'vertical-reverse'
  });

  const m = g.branch('master');
  m.commit("最初のコミット");

  const a = m.branch('A機能開発');
  a.commit("機能追加").commit("テストケース追加");

  const b = a.branch("B機能開発");

  b.commit("機能追加").commit("テストケース追加");

  b.merge(m);
  a.merge(m);
}

{
  const g = new GitGraph({
    elementId: "to_branch",
    template: 'blackarrow',
    orientation: 'vertical-reverse'
  });

  const m = g.branch('master');
  m.commit("最初のコミット");

  const a = m.branch('A機能開発');
  a.commit("機能追加").commit("テストケース追加");

  const b = m.branch("B機能開発");

  b.commit("機能追加").commit("テストケース追加");

  b.merge(a);
  a.merge(m);
}

{
  const g = new GitGraph({
    elementId: "follow",
    template: 'blackarrow',
    orientation: 'vertical-reverse'
  });

  const m = g.branch('master');
  m.commit("最初のコミット");

  const a = m.branch('A機能開発');
  a.commit("機能追加");

  m.commit("B機能追加");
  m.merge(a);

  a.commit("テストケース追加");

  a.merge(m);
}

{
  const g = new GitGraph({
    elementId: "remarge",
    template: 'blackarrow',
    orientation: 'vertical-reverse'
  });

  const m = g.branch('master');
  m.commit("最初のコミット");

  const a = m.branch('A機能開発');
  a.commit("機能追加");

  a.commit("テストケース追加");

  a.merge(m);

  a.commit("テストケース修正");

  a.merge(m);
}

{
  const g = new GitGraph({
    elementId: "sub_branch",
    template: 'blackarrow',
    orientation: 'vertical-reverse'
  });

  const m = g.branch('master');
  m.commit("最初のコミット");

  const a = m.branch('A機能開発');
  a.commit("Empty commit");

  const a1 = a.branch('A1機能開発')
  a1.commit("機能追加").commit("テストケース追加");

  const a2 = a.branch('A2機能開発')
  a2.commit("機能追加").commit("テストケース追加");
  a1.merge(a);
  a2.merge(a);

  a.merge(m);
}
