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
    `,
      empty: "<h1>No results... please consider another query</h1>"
    }
  })
);

search.start();
