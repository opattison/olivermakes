---
title: 'Meridian Hill Park'
layout: edgeless
theme: dark
category: 'photography'
tags:
  - 'dc'
date: 2015-06-06 13:20
updated: 2015-06-06 13:20
unique_id: 2015-06-06:meridian-hill
description: 'A single shallow shot at a local DC park fountain walkway.'
photo:
  - 2014-02-22-meridian

---

<figure class="image--wide">
  {% assign photo = page.photo[0] %}
  {% include helper/photo-from-collection.liquid %}
  {% include block/srcset.html %}
  <figcaption>{{ image.caption | markdownify }}</figcaption>
</figure>
