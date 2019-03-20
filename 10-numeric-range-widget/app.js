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
    container: "#hits",
    templates: {
      item: data => `
      <img src="${data.image}"/>
        <div>
          <div class="hit-title">
            <h4>${instantsearch.highlight({
              attribute: "name",
              hit: data
            })}</h4>
            <div class="price">$${data.price}</div>
          </div>
        <p>${instantsearch.highlight({
          attribute: "description",
          hit: data
        })}</p>
      </div>
      `,
      empty: "<h1>No results... please consider another query</h1>"
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#brands",
    attribute: "brand",
    searchable: true,
    searchablePlaceholder: "Search for brands"
  })
);

search.addWidget(
  instantsearch.widgets.hierarchicalMenu({
    container: "#categories",
    attributes: [
      "hierarchicalCategories.lvl0",
      "hierarchicalCategories.lvl1",
      "hierarchicalCategories.lvl2"
    ]
  })
);

// add widget

search.start();
