var gitgraph = new GitGraph();

// masterブランチを作成 ＆ HEADを切り替えて2回コミット
var master = gitgraph.branch('master');
gitgraph.commit().commit();

// developブランチを作成 ＆ HEADを切り替えて2回コミット
var develop = gitgraph.branch('develop');
gitgraph.commit().commit();

// HEADをmasterブランチに切り替えて1回コミット
master.checkout();
gitgraph.commit();

// developブランチをmasterブランチにマージ
develop.merge(master);
