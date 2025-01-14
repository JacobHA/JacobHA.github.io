---
layout: page
title: Gallery
permalink: /photos/
---


<h1>An unorganized gallery of photos from 2023+</h1>
<div class="gallery">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/gallery' %}
      <div class="gallery-item">
        <img src="{{ image.path | relative_url }}" alt="{{ image.name }}">
      </div>
    {% endif %}
  {% endfor %}
</div>
