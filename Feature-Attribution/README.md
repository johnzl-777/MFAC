# Feature Attribution

## Setting up the Full Integrated Gradients Pipeline

The pipeline of going from the Zebrafish dataset to interactive UMAP plot is split among two Jupyter Notebooks, the first being meant to be run on Google Colab and the second being meant to run on your local machine due to the fact that Colab fails to generate the Bokeh-based UMAP plot.

The notebooks are:
* Full_Integrated_Gradients_Attribution_Generation.ipynb
  * Responsible for taking the images and the classifier and creating a tensor that contains the attribution data
* Full_Interactive_Integrated_Gradients.ipynb
  * Responsible for taking the attribution data from the notebook above and generating a Bokeh Plot (this NEEDS to be run locally, Colab constantly fails to render the plot)

The notebooks have been commented to indicate what exactly goes on in the pipeline but there are some files you will need access to:
* The classifier weights ('model1e-05500.5_april_4.pt')
* The autocropped Zebrafish Dataset ('x_train_b_cropped.npy')
* The Zebrafish labels ('y_train_b.npy')
* A place to save the final attribution data at the end of the first notebook (you should have already mounted your google drive into the Colab instance!)
* A place to run the second notebook (which may require you download the above data locally, and specify the proper path to the attribution data before)

Expand on Hover/Bokeh usage code taken from:
https://tonio73.github.io/data-science/cnn/CnnVsDense-Part2-Visualization.html
https://zapaishchykova.medium.com/the-meaningful-visualization-of-clusters-2a666be0f460