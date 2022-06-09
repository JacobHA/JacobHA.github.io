---
layout: post
title:  "Visualizing LSM Data"
date:   2022-04-25 16:30:57 -0400
categories: data-viz
---

In this (first) post, I will be showing how to visualize the data from the proprietary [Zeiss][zeiss-homepage] LSM (laser scanning microscopy) data format.

- First, we use MATLAB to manipulate the file, using the bfopen function from [bio-formats][bf-link].
- Then we save it after properly slicing away the multiple channels (DAPI and Phalloidin) into two distinct arrays.
- These files are then loaded into Python, where k3d and [vedo (a most recommended visualization toolkit!)][vedo-homepage] are used to visualize the data.

Check out the MATLAB/Python [repository][lsm-repo] for the details on how this extraction and visualization is done.

Click [here][lsm-htmlfile] (or on the image below) to enter the interactive 2-channel model for an example nodule of cancer cells (courtesy of [Dr. Jonathan Celli][celli-page] here at UMass Boston). Use the dropdown menu to toggle visibility of the two channels, and alter the minimum thresholds (vmin).

<center>
<a href="/_pages/lsm_interactive.html">
<img src = "/assets/dapiphall_plot.PNG" width="50%">
</a>
</center>
<br>

Please file all bugs/feature requests at [repo][lsm-repo].



<!-- placed preferably before the closing `<body>` tag -->
<!-- data-taret blank opens a new tab when clicked -->
<!-- source: https://github.com/remarkablemark/github-corners#readme -->
<script data-href="https://github.com/JacobHA/confocal_analysis" data-target = "_blank" src="https://unpkg.com/github-corners@0.1.0/dist/embed.min.js"></script>


[vedo-homepage]: https://github.com/marcomusy/vedo
[zeiss-homepage]: https://www.zeiss.com/microscopy/us/products/confocal-microscopes.html
[lsm-repo]: https://github.com/JacobHA/confocal_analysis
[lsm-htmlfile]: /_pages/lsm_interactive.html
[bf-link]: https://www.openmicroscopy.org/bio-formats/
[celli-page]: http://www.quantum.umb.edu/Celli/index.html