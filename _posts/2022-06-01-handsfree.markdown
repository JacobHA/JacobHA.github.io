---
layout: post
title:  "HandsFree: Manipulating 3D Files Via Hand Gestures"
date:   2022-06-01 22:30:57 -0400
categories: projects
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css" integrity="sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.js" integrity="sha384-9Nhn55MVVN0/4OFx7EE5kpFBPsEMZxKTCnA+4fqDmg12eCTqGi6+BB2LjY8brQxJ" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>

<head>
  <!-- add the button style & script -->
  <link rel="stylesheet" href="jacobha.github.io/css/applause-button.scss" />
  <script src="jacobha.github.io/applause-button.js" type="text/javascript"></script>
</head>
<!-- In the <head> of your HTML page. -->
<!-- <script src="https://unpkg.com/clap-button-com/dist/main.js"></script>
<link rel="stylesheet" href="https://unpkg.com/clap-button-com/dist/styles.css" /> -->

*Work in Progress*


I have been working (on and off for the past year) on interfacing with 3D objects (files like *.stl, *.obj, etc.) through hand gestures. I realize the name for the project is a bit ironic! The purpose is to use your hands in "real-life" rather than through the mouse and keyboard to manipulate 3D objects in a more "natural" way.

I believe this project was subconsciously inspired by a video released some time ago by [SpaceX][spacex-video]. However, their demo involves the use of some extra add-on motion sensors. I want to enable the same interactivity with the bare bones: a simple built-in laptop camera. This makes the problem more difficult, because with just a camera we can only see a 2D representation of the scene (our hands). (This can be slightly bypassed by more advanced pose estimation and with infrared sensors, which are included on some laptops, but I want to keep it as basic as possible so that there are no hardware limitations. More advanced software for handtracking could be useful, i.e. using the [LeapMotion controller][leap-link]. But this costs about $100 and one purpose of this project is to not require (m)any add-ons!)

There are several simple features:
- Zooming: think pinch to zoom
- Rotating: not always intuitive due to 2D representation
- Panning: think of dragging hands across the screen

There should (I have now implemented these!) also be other simple poses which allow for:
- Pausing: so the image is locked in place beetween functions
- Resetting: so the image goes back to its original position


Currently, I use one's forefinger to "drag" and rotate the object in the direction of motion, about the center of mass (assuming uniform density). This gives the impression of applying a torque on the object to rotate it. In the future, I could instead explicitly calculate the resulting rotations (from $$\tau = I \alpha$$), but for now the current solution suffices.

I highly request suggestions on alternate ways of defining rotation (which are intuitive to use)!

Check out a simple demo here:
![Alt Text](/assets/HandsFree-demo.gif)
As you can see, we have the capability of controlling a 3D object in a "hands-free" way (free of keyboard/mouse, that is). As you can also see, there are still some issues. For instance, the pausing function (keep hands still) is a bit noisy. There are many parameters in the handtracking.py file that can be fine-tuned to help with some of these issues (params like: hand tracking minimum confidence levels, sigmoid smoothing params, and many others).


<body>
  <!-- add the button! -->
  <applause-button style="width: 58px; height: 58px;"/>
</body>

BTW - I am also working on a GUI interface for the same project (see qt_app.py in [the repo][handsfree-repo]). Hopefully this can eventually be turned into a standalone executable file. If I were more comfortable with PyQt and C++, I would build (and maybe will re-build) the project there.

Please file all bugs/feature requests at [this repository][handsfree-repo].

<script data-href="https://github.com/JacobHA/HandsFree" data-target = "_blank" src="https://unpkg.com/github-corners@0.1.0/dist/embed.min.js"></script>


[spacex-video]: https://www.youtube.com/watch?v=xNqs_S-zEBY
[handsfree-repo]: https://github.com/JacobHA/HandsFree
[leap-link]: https://www.ultraleap.com/product/leap-motion-controller/