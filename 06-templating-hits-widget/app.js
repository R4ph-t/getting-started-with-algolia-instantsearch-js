const searchClient = algoliasearch(
  "latency",
  "b37781ea260eea196da5b3346d5ff4c9"
);

const search = instantsearch({
  indexName: "instant_search",
  searchClient
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search for products, brands or categories"
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits"
  })
);

search.start();
