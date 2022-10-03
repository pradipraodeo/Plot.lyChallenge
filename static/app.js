
// populating dropdown with the given data
function init() {
    var dropdown = d3.select("#selDataset");

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
