---
layout: post
title:  "Visualizing LSM Data"
date:   2022-04-25 16:30:57 -0400
categories: data-viz
---

In this (first) post, I will be showing how to visualize the data from the proprietary [Zeiss][zeiss-homepage] LSM (microscopy) data format.

First, we need MATLAB to manipulate the file, using the bfopen function from bio-formats.
Then we save it after properly slicing away the multiple channels into two distinct arrays.
These files are opened in Python, where k3d and [vedo (a most recommended visualization toolkit!)][vedo-homepage] are used to visualize the data.

Check out the MATLAB/Python [repository][lsm-repo] for more details on how the visualization is done.

Click [here][lsm-htmlfile] to enter the interactive 2-channel model. Use the dropdown menu to toggle 
visibility of the two channels, and alter the minimum thresholds (vmin).

Please file all bugs/feature requests at [repo][lsm-repo].

[vedo-homepage]: https://github.com/marcomusy/vedo
[zeiss-homepage]: https://www.zeiss.com/microscopy/us/products/confocal-microscopes.html
[lsm-repo]: https://github.com/JacobHA/confocal_analysis
[lsm-htmlfile]: /_pages/lsm_interactive.html