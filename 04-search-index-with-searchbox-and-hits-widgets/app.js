const search = instantsearch({
  appId: "latency",
  apiKey: "b37781ea260eea196da5b3346d5ff4c9",
  indexName: "instant_search"
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    autofocus: false,
    placeholder: "Search for products"
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits"
  })
);

search.start();
