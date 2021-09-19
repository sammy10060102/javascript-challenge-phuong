// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(tableData);

// Create function to create tableData
function createTable(tableData) {

    // Clear out table
    tbody.html("");

    // BONUS: Refactor to use Arrow Functions!
    tableData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Create a function to handle date entered.
function handleDate() {
    var date = d3.select("#datetime").property("value");
    console.log(date);

    // Create variable to filter data
    var filterTableData = tableData;
    console.log(filterTableData);

    // Check for new date entered
    if (date) {
        // Apply filter using date
        filterTableData = filterTableData.filter(row => row.datetime === date);
        console.log(filterTableData);

        // Create table with filterData
        createTable(filterTableData);
    }
}

// Attach the event listener to a form button (id="filter-btn")
d3.select("#filter-btn").on("click", handleDate);

// Call function to build table
createTable(tableData);
