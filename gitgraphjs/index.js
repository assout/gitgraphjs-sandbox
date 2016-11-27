// let myTemplateConfig = {
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
// let myTemplate = new GitGraph.Template( myTemplateConfig );

{
  let g = new GitGraph({
    elementId: "first",
    template: 'blackarrow',
    // mode: 'compact',
    orientation: 'vertical-reverse'
  });

  let master = g.branch('master');
  master.commit("最初のコミット");

  let a = master.branch('A機能開発');
  a.commit("機能追加").commit("テストケース追加");

  a.merge(master);

  let b = master.branch("B機能開発");
  b.commit("機能追加").commit("テストケース追加");

  b.merge(master);
}


{
  let g = new GitGraph({
    elementId: "seconds",
    template: 'blackarrow',
    // mode: 'compact',
    orientation: 'vertical-reverse'
  });

  let master = g.branch('master');
  master.commit("最初のコミット");

  let b = master.branch("B機能開発");
  let a = master.branch('A機能開発');

  a.commit("機能追加").commit("テストケース追加");
  b.commit("機能追加").commit("テストケース追加");

  b.merge(master);
  a.merge(master);

}

{
  let g = new GitGraph({
    elementId: "third",
    template: 'blackarrow',
    // mode: 'compact',
    orientation: 'vertical-reverse'
  });

  let master = g.branch('master');
  master.commit("最初のコミット");

  let b = master.branch("B機能開発");
  let a = master.branch('A機能開発');

  a.commit("機能追加").commit("テストケース追加");
  b.commit("機能追加").commit("テストケース追加");

  b.merge(master);
  a.merge(master);

}
