---
layout: post
title: "PyScript: Using Python in the Browser"
permalink: /pyscript-basics/
---

<!-- Latest PyScript CDN links -->
<link
  rel="stylesheet"
  href="https://pyscript.net/releases/2025.8.1/core.css"
/>
<script type="module" src="https://pyscript.net/releases/2025.8.1/core.js"></script>

<py-config>
packages = ["numpy", "matplotlib"]
</py-config>

## Hello, World!
(You may need to wait a few seconds for PyScript to load for results to appear. Tested on Firefox and Chrome.)

After including the following in your HTML file:
```html
<link
  rel="stylesheet"
  href="https://pyscript.net/releases/2025.8.1/core.css"
/>
<script type="module" src="https://pyscript.net/releases/2025.8.1/core.js"></script>
```
You can now run Python in the browser, and display results directly on the page. For example:

```html
<py-script>
print("Hello, world!")
</py-script>
```

<py-script>
from pyscript import display
display("Hello, world!")
</py-script>

<py-script>
import numpy as np
import matplotlib.pyplot as plt
from pyscript import display

# Data generation
x = np.linspace(0, 1, 100)
y = x ** 2

# Plotting
fig, ax = plt.subplots()
ax.plot(x, y)
ax.set_title("y = x²")
ax.set_xlabel("x")
ax.set_ylabel("y")

# Explicit display call is required
display(fig)
</py-script>

Check out the [PyScript documentation](https://pyscript.net/) for more details and [examples](https://docs.pyscript.net/2025.8.1/examples/).