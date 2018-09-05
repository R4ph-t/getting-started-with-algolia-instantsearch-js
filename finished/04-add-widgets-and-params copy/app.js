const search = instantsearch({
  appId: "latency",
  apiKey: "b37781ea260eea196da5b3346d5ff4c9",
  indexName: "instant_search"
});

search.addWidget(
  instantsearch.widgets.hits({
    container: "#my-widget"
  })
);

search.start();
