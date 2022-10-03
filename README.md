# Plot.ly Homework - Belly Button Biodiversity

In this assignment, I build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.</br>



## Step 1: Plotly

1. Used the D3 library to read in `samples.json`.
2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. 
 * Used `sample_values` as the values for the bar chart.
 
 * `otu_ids` as the labels for the bar chart.
 
 * `otu_labels` as the hovertext for the chart.
 
 ![bar Chart](images/hw01.png)
   
3. Created a bubble chart that displays each sample.

* Used `otu_ids` for the x values.

* `sample_values` for the y values.

* `sample_values` for the marker size.

* `otu_ids` for the marker colors.

* `otu_labels` for the text values.

![Bubble Chart](images/bubble_chart.png)

4. A box is created to display the sample metadata, i.e., an individual's demographic information.

![hw](images/hw03.png)

5. An interactive dashboard is created that updates all of the plots any time that a new sample is selected.

![hw](images/hw02.png)

## Bonus Challenge Assignment
A Gauge Chart is created to plot the weekly washing frequency of the individual.

![Weekly Washing Frequency Gauge](images/gauge.png)

 
