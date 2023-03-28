---
layout: post
title: "PyScript: Using Python in the browser"
permalink: /pyscript-basics/
# categories: research_posts
# exclude: true
---

<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
<script defer src="https://pyscript.net/alpha/pyscript.js"></script>
<py-env>
    - numpy
    - matplotlib
</py-env>


In this post I'll give a few basic examples of using PyScript to use Python in the browser. Feel free to look at [this specific markdown file][this-post] to see the exact code.

After including the pyscript links in the html (markdown) header:
```
<link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
<script defer src="https://pyscript.net/alpha/pyscript.js"></script>
```


Now, the simple piece of code below will be rendered in the browser:
```
<py-script>
print("Hello, world!")
</py-script>
```
can be used to generate the following:
<div>
<py-script>
print("Hello, world!")
</py-script>
</div>

Quite amazingly, we can also import useful modules (also included in the header), such as matplotlib and numpy.
By wrapping this code in `<py-script>` tags, we can render a plot.
```python
import matplotlib.pyplot as plt
import numpy as np
x_axis = np.linspace(0,1,100)
def f(x):
    return x**2
y_axis = f(x_axis)
plt.plot(x_axis, y_axis)
plt.show()

fig1, ax1 = plt.subplots()
ax1.plot(x_axis, y_axis)
ax1.set_title("Plot 1")
ax1.set_xlabel("x")
ax1.set_ylabel("y=x^2")

fig1
```

<!-- Now the code itself -->
<py-script>
import matplotlib.pyplot as plt
import numpy as np
x_axis = np.linspace(0,1,100)
def f(x):
    return x**2
y_axis = f(x_axis)
plt.plot(x_axis, y_axis)
plt.show()

fig1, ax1 = plt.subplots()
ax1.plot(x_axis, y_axis)
ax1.set_title("Plot 1")
ax1.set_xlabel("x")
ax1.set_ylabel("y=x^2")

fig1
</py-script>


For more information (and admittedly cooler) examples, take a look at [this page][pyscript-examples].



[this-code]: https://github.com/JacobHA/JacobHA.github.io/blob/main/_posts/2022-06-08-pyscript-basics.markdown
[pyscript-examples]: https://github.com/pyscript/pyscript/tree/main/examples