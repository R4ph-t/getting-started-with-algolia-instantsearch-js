const searchClient = algoliasearch(
  "latency",
  "b37781ea260eea196da5b3346d5ff4c9"
);

const search = instantsearch({
  indexName: "instant_search",
  searchClient
});

search.addWidget(
  instantsearch.widgets.menu({
    container: "#test-widget",
    attribute: "type",
    templates: {
      item: "{{elipsis}}"
    },
    transformItems: items => {
      return items.map(item => ({
        ...item,
        elipsis: `${item.value.slice(0, 5)} ...`
      }));
    }
  })
);

search.start();
