---
layout: post
title:  "Visualizing Light Scattering Data"
date:   2022-04-26 16:30:57 -0400
categories: data-viz
---

In this post, I will be showing how to visualize data obtained from Depolarized Dynamic Light Scattering (DDLS), an optical technique used to measure structural properties of nanoscale objects, typically suspended in liquid. This is a useful technique for studying the shape of nanorods, microgels, and colloidal particles. When using active materials for example [such as these microgels][microgel-paper].

The code in [this repository][ddls-repo] is used to read in the optical data, perform the structure factor calculations, and generate a 3D object (cylinder, oblate spheroid, or prolate spheroid) based on the fitted parameters. Then, the object is visualized in an interactive html file, c.f. [this page][ddls-html].


Please file all bugs/feature requests at [this repository][ddls-repo].

[microgel-paper]: https://pubs.acs.org/doi/abs/10.1021/acs.macromol.0c01605
[ddls-repo]: https://github.com/JacobHA/DDLS-in-Python
[ddls-html]: http://htmlpreview.github.io/?https://github.com/JacobHA/DDLS-in-Python/master/prolate_5.143347.html