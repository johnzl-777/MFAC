import matplotlib.pyplot as plt
import numpy as np
import sys

if len(sys.argv) != 3 and len(sys.argv) != 4:
    print(f'Usage: python3 {sys.argv[0]} <original> <cropped> [n]')
    exit(1)
print('Loading images...')
try:
    original_images = np.load(sys.argv[1], mmap_mode='r')
    cropped_images = np.load(sys.argv[2], mmap_mode='r')
except FileNotFoundError as e:
    print(e)
    exit(1)

if original_images.shape[0:2] != cropped_images.shape[0:2]:
    print('Mismatch in number of images')
    print(f'Shape of original images: {original_images.shape}')
    print(f'Shape of cropped images: {cropped_images.shape}')
    exit(1)

if len(sys.argv) == 4:
    n = int(sys.argv[3])
else:
    n = 3

print('Building plot...')
batch_size = original_images.shape[1]
indices = np.sort(np.random.choice(range(original_images.shape[0]), size=n, replace=False))
fig = plt.figure(constrained_layout=True)
subfigs = fig.subfigures(nrows=n, ncols=1)
for row, subfig in enumerate(subfigs):
    index = indices[row]
    subfig.suptitle(f"Image {index}")
    axs = subfig.subplots(nrows=2, ncols=batch_size)
    for j in range(batch_size):
        axs[0, j].imshow(original_images[index][j])
        axs[1, j].imshow(cropped_images[index][j])
plt.show()
