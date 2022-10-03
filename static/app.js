
// populating dropdown with the given data
function init() {
    var dropdown = d3.select("#selDataset");
    // print("inside init")
    d3.json("samples.json").then((samplesData) => {
        samplesData.names.forEach((sample) => {
            dropdown.append("option").text(sample).property("value", sample);
        });
        var sampleID = dropdown.property("value");
        console.log(sampleID);
        buildBarPlot(sampleID);
        buildBubblePlot(sampleID);
        IndividualInfo(sampleID);
        buildGaugePlot(sampleID);
    }); 
}

// function to display data with the selected dropdown menu item
function optionChanged(sampleID) {
    console.log(sampleID);
    buildBarPlot(sampleID);
    buildBubblePlot(sampleID);
    IndividualInfo(sampleID);
    buildGaugePlot(sampleID);
}
// function for creating the bar chart with the selected ID from the dropdown
function buildBarPlot(SelectedsampleID) {

    d3.json("samples.json").then(function(data) {
            var DataNeeded = data.samples.filter(object =>object.id.toString() == SelectedsampleID)[0];
            console.log(DataNeeded);

           // Create the Trace
            var trace = {
                x : DataNeeded.sample_values.slice(0,10).reverse(),
                y : DataNeeded.otu_ids.slice(0,10).reverse().map (row => "OTU " + row),
                text: DataNeeded.otu_labels.slice(0,10).reverse(),
                type : "bar",
                orientation : "h"
            };

            // Create the data array for the plot
            var data = [trace];

            // Define the plot layout
            var layout = {
                height: 600,
                width: 500
              };

            // Plot the chart to a div tag with id "bar"
            Plotly.newPlot("bar", data, layout);
  })

}


function buildBubblePlot(SelectedsampleID) {

    d3.json("samples.json").then(function(data) {
            var DataNeeded = data.samples.filter(object =>object.id.toString() == SelectedsampleID)[0];
            //console.log(DataNeeded);

             // Create the Trace
            var trace = {
                x : DataNeeded.otu_ids,
                y : DataNeeded.sample_values,
                text: DataNeeded.otu_labels,
                mode: 'markers',
                marker: {
                    size: DataNeeded.sample_values,
                    color: DataNeeded.otu_ids,
                }
            };

            // Create the data array for the plot
            var data = [trace];

            // Define the plot layout
            var layout = {
                xaxis:{title: "OTU ID"},
                showlegend: false,
                height: 600,
                width: 1200
              };
              
            // Plot the chart to a div tag with id "bubble"
            Plotly.newPlot("bubble", data, layout);
  })
}

function IndividualInfo(SelectedsampleID) { 
    // Display metadata and retrieve panel
    var dataPanel = d3.select("#sample-metadata");
    
    // Clear panel data
    dataPanel.html("");

    // Store into variable and console log
    d3.json("samples.json").then(function(data) {
        var DataNeeded = data.metadata.filter(object =>object.id.toString() == SelectedsampleID)[0];
        console.log(DataNeeded);

    // Display key-value pair from metadata
    Object.entries(DataNeeded).forEach(([key, value]) => {
        dataPanel.append("h6").text(`${key}: ${value}`);
    });

})

}

init();
