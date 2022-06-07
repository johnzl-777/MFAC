# Feature Attribution


For the FINAL Feature Attribution pipeline, please refer here: https://github.com/Leila-Jadoon/MFAC/tree/main/Feature-Attribution

## Credits

The code for generating interactive UMAP plots was obtained and modified from: Expand on Hover/Bokeh usage code taken from:
* https://tonio73.github.io/data-science/cnn/CnnVsDense-Part2-Visualization.html
* https://zapaishchykova.medium.com/the-meaningful-visualization-of-clusters-2a666be0f460

The ResNet Repeated ReLU Bug fix code was obtained from https://github.com/shikhar-srivastava/share/blob/master/no_reuse.py with earlier/other tests using some code provided in the issue itself: https://github.com/pytorch/captum/issues/378

Training ResNet against MNIST for earlier Feature Attribution tests came from: https://zablo.net/blog/post/pytorch-resnet-mnist-jupyter-notebook-2021/


## How This Repository is Organized

All work from the old attribution pipeline has since been moved into an "Old-Pipeline" folder for record keeping in the "Fish-Attribution" Folder. More recent work can be found in the prefixed "model..." folders where more feature attribution methods were tested.

NOTE: The lack of content in model1e-05500.5_april_4.pt is because most of it made it into the `Old-Pipeline` folder after consolidation.

## (OLD) Setting up the Full Integrated Gradients Pipeline

__SEE `OLD-PIPELINE FOLDER` FOR RELEVANT WORK__
=======
Please refer to the associated documentation for more information.


The notebooks should be run in the following order:
1. Label Generation
2. Feature Attribution Data Generation
3. Feature Attribution Image Generation
4. Feature Attribution Bokeh Generation


The notebooks are (inside of the "Fish-Attribution" Folder):
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


## Resnet-Deeplift Fix

A (failed) attempt to try to get DeepLift to work with our ResNet based models. Captum seems to be incompatible with torchvision's default ResNet implementations, issuing an error about a potential repeated ReLU instance. The error was eventually found NOT to be ResNet's fault AFTER using code found on a GitHub issue fix to replace parts of ResNet's model with unduplicated ReLU layers and was in fact responsible by our model architecture. The issue with this conclusion is that the model architecture used for this project ALSO does not have any repeated ReLU instances.

Investigation was dropped to prioritize other features for the project but the results of the investigation can be found in this folder.
* `4_Digit_MNIST_Classifier_(no inplace).ipynb`
  * Try to use "inplace=True" for the ResNet ReLU instances, see if that provided any noticeable changes
* `4_Digit_Unique_Relu_DeepLift.ipynb`
  * First time getting DeepLift working with just ResNet (no fish classification here, just MNIST). Isolated the problem to our architecture instead of torchvision's ResNet implementation after applying the fix.
* `Single Backbone DeepLift Training` & `Single_Backbone_DeepLift_Attribution.ipynb`
  * Attempt to train our classifier as a single backbone model and see if that alleviates the problem

## model1e-050.5.2022-05-11 13_52_21 Work

This model uses EfficientNet as its base, allowing for DeepLift and ResNet incompatible methods to work nicely. This model is also referred to as "Kevin's HP Mode" - HP for "High Performance" considering it was a breakthrough at the time relative to previous iterations of the model.

* `Kevin HP Model DeepLift Attribution Generation.ipynb`
  * DeepLift (historically unsuccesful with ResNet) confirmed working with EfficientNet
* `Kevin_HP_Model_IG_Attribution_Generation.ipynb`
  * Applying Integrated Gradients against the EfficientNet model fails (unlike prior instances based on ResNet) due to exhausting all available memory. Suspected to be due to unnormalized output or certain labels causing issues.
* `Anchors.ipynb` - an attempt at user [Anchors](https://docs.seldon.io/projects/alibi/en/stable/methods/Anchors.html) offered by Alibi Explain against our PyTorch model. Unsuccesful due to dimensionality issues.
* Test notebooks - these were made in order to test other Feature Attribution methods to expand the scope of the project. Originally they started as TEST CPU-ONLY notebooks (LRP was left as CPU-ONLY due to issues with not have "rules" for the Augmentation and later SiLU layers) but were migrated to GPUs. These notebooks were the precursor to the final "Feature Attribtuion Data Generation" notebook in the main pipeline.
  * `TEST GPU Saliency Maps Attribtuion Generation`
  * `TEST GPU Input X Gradient Attribution Generation`
  * `TEST Guided Backprop Attribution Generation`
  * `TEST CPU-ONLY LRP Attribution Generation`
  * `TEST GPU Deconvolution Attribution Generation`
* `Kevin_HP_Model_GradientShap_Attribution_Generation.ipynb`
  * GradientSHAP test against a small subset of model data

## model1e-050.5.2022-05-22 12:13:10.pt Work

This is mostly just results from tests, the notebooks that were here became the final notebooks mentioned in the very beginning of this README.

=======
