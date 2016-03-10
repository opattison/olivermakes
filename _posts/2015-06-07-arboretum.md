---
title: 'Summer at the National Arboretum'
layout: edgeless
theme: dark
category: 'photography'
tags:
  - 'dc'
date: 2015-06-07 19:36
updated: 2015-06-07 19:36
unique_id: 2015-06-07:arboretum
description: 'Scenes from an afternoon visiting the Asian Collections at DC’s arboretum.'
photo:
  - 2014-06-29-aristotle
  - 2014-06-29-arboretum

---

<figure class="image--wide">
  {% assign photo = page.photo[0] %}
  {% include helper/photo-from-collection.liquid %}
  {% include block/srcset.html %}
</figure>

<figure class="image--wide">
  {% assign photo = page.photo[1] %}
  {% include helper/photo-from-collection.liquid %}
  {% include block/srcset.html %}
</figure>
