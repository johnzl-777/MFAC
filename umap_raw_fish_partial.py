from ctypes import alignment
from tkinter import CENTER
import umap
from io import BytesIO
import base64
from PIL import Image

from bokeh import plotting, palettes
from bokeh.models import HoverTool, ColumnDataSource, CategoricalColorMapper
from bokeh.plotting import output_file
import numpy as np
import pandas as pd

import torch
from torch.utils.data import TensorDataset, DataLoader
from torch import nn

output_file(filename="index.html", title="MFAC Interactive Application")

x = torch.load("data/" + "x_subset.tensor")
y = torch.load("data/" + "y_subset.tensor")

reducerFish = umap.UMAP(n_neighbors=20, min_dist=0.5, verbose=True)
embeddingFish = reducerFish.fit_transform(torch.reshape(x, (50, 2457600)))


def embeddableImage(data):
    # data should be [4, 3, 200, 1024] instance
    encoded_subimages = []
    for sub_image in data:
        # print(sub_image.shape)
        #img_data = (255 * (1 - sub_image)).astype(np.uint8)
        img_data = (255 * sub_image).astype(np.uint8).transpose(1, 2, 0)
        image = Image.fromarray(img_data, mode='RGB')
        buffer = BytesIO()
        image.save(buffer, format='png')
        encoded_subimages.append(
            'data:image/png;base64,' + base64.b64encode(buffer.getvalue()).decode())
    return encoded_subimages


def umapPlot(embedding, x, y, yTrue=None, title=''):
    """ Plot the embedding of X and y with popovers using Bokeh """

    df = pd.DataFrame(embedding, columns=('x', 'y'))
    # for each image should be able to apply the embeddable image function
    # list of lists [rows x columns], x instances with 4 columns
    sub_images = np.array(list(map(embeddableImage, x)))
    for i in range(4):
        df['image'+str(i+1)] = sub_images[:, i]
    df['class'] = [str(d) for d in y]
    df['index'] = list(range(len(y)))
    if yTrue is not None:
        df['trueDigit'] = [str(d) for d in yTrue]

    datasource = ColumnDataSource(df)

    colorMapping = CategoricalColorMapper(factors=np.arange(
        10).astype(np.str), palette=palettes.Spectral10)

    plotFigure = plotting.figure(
        title=title,
        plot_width=600,
        plot_height=600,
        tools=('pan, wheel_zoom, reset')
    )

    if yTrue is None:
        tooltip = """
            <div>
                <div>
                    <img src='@image1' style='float: left; width:256px; height:50px; margin: 5px 5px 5px 5px'/>
                </div>
                <div>
                    <img src='@image2' style='float: left; width:256px; height:50px; margin: 5px 5px 5px 5px'/>
                </div>
                <div>
                    <img src='@image3' style='float: left; width:256px; height:50px; margin: 5px 5px 5px 5px'/>
                </div>
                <div>
                    <img src='@image4' style='float: left; width:256px; height:50px; margin: 5px 5px 5px 5px'/>
                </div>
                <div>
                    <span style='font-size: 16px; color: #224499'>Class:</span>
                    <span style='font-size: 18px'>@class</span>
                    <span style='font-size: 16px; color: #224499'>Index:</span>
                    <span style='font-size: 18px'>@index</span>
                </div>
            </div>
            """
    else:
        tooltip = """
            <div>
                <div>
                    <img src='@image' style='float: left; margin: 5px 5px 5px 5px'/>
                </div>
                <div>
                    <span style='font-size: 16px; color: #224499'>Digit:</span>
                    <span style='font-size: 18px'>@digit (true: @trueDigit)</span>
                </div>
            </div>
            """
    plotFigure.add_tools(HoverTool(tooltips=tooltip))

    plotFigure.circle(
        'x', 'y',
        source=datasource,
        color=dict(field='class', transform=colorMapping),
        line_alpha=0.6, fill_alpha=0.6, size=8
    )
    plotting.show(plotFigure)

    return plotFigure


fig = umapPlot(embeddingFish, x.numpy(), y.squeeze().numpy(), title='UMAP projection of the Zebrafish dataset')