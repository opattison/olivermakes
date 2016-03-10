---
title: 'Chichester street reflection'
layout: edgeless
theme: dark
option:
  - map-meta
category: 'photography'
tags:
  - 'travel'
date: 2014-11-27 20:20
updated: 2014-11-28 03:07
drafted: 2014-03-23 12:34
unique_id: 2014-03-23:chichester-street-reflection
description: 'After the rain in Chichester, on a brief trip to England.'
photo:
  - 2014-03-23-chichester-street

---

<figure class="image--wide">
  {% assign photo = page.photo[0] %}
  {% include helper/photo-from-collection.liquid %}
  {% include block/srcset.html %}
  <figcaption>{{ image.caption | markdownify }}</figcaption>
</figure>
