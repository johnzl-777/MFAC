# Data Preprocessing

## autocrop.py
Usage: python3 autocrop.py \<infile\> \<outfile\>

This script takes in a .npy file in the shape `(number of sets, images per set, height, width, rgb)`, for examples `(285, 4, 200, 1024, 3)`, and outputs another npy file containing the same images intelligently cropped. You can find the dimensions of the cropped images by reading the shape of the cropped array.

Example:

```console
python3 autocrop.py x_train_b.npy x_train_b_cropped.npy
```

## inspect_crop.py
Usage: python3 inspect_crop.py \<original\> \<cropped\> [n]

This script takes two npy files, one containing the original images and the other containing the cropped images. It then randomly selects n sets (default 3) and displays the original and cropped versions.

Example:

```console
python3 inspect_crop.py x_train_b.npy x_train_b_cropped.npy 4
```
