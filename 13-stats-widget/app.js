const search = instantsearch({
  appId: "latency",
  apiKey: "b37781ea260eea196da5b3346d5ff4c9",
  indexName: "instant_search"
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
      <img src="${data.image}" /> 
      <div>
        <div class="hit-title">
          <h4>
            ${data._highlightResult.name.value}
          </h4> 
          <div class="price">$${data.price}</div>
        </div>
        <p>${data._highlightResult.description.value}</p>
      </div>
    `
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#brands",
    attributeName: "brand",
    searchForFacetValues: { placeholder: "Search brands" },
    templates: {
      header: "Brands"
    }
  })
);

search.addWidget(
  instantsearch.widgets.hierarchicalMenu({
    container: "#categories",
    attributes: [
      "hierarchicalCategories.lvl0",
      "hierarchicalCategories.lvl1",
      "hierarchicalCategories.lvl2"
    ],
    templates: {
      header: "Categories"
    }
  })
);

search.addWidget(
  instantsearch.widgets.rangeInput({
    container: "#price",
    attributeName: "price",
    templates: {
      header: "Price"
    }
  })
);

search.addWidget(
  instantsearch.widgets.clearAll({
    container: "#clear-all",
    templates: {
      link: "Reset everything"
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
);

// add widget

search.start();
