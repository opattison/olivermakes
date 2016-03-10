---
title: 'The shore at Bosham in Chichester&nbsp;Harbor'
layout: edgeless
theme: dark
option:
  - map-meta
category: 'photography'
tags:
  - 'travel'
date: 2014-11-27 21:30
updated: 2014-11-28 03:06
drafted: 2014-03-23 12:34
unique_id: 2014-03-23:chichester-shore
description: 'On a visit to Chichester in southern England, I visited the waterside at Bosham.'
photo:
  - 2014-03-23-chichester-sky
  - 2014-03-23-chichester-shore
  - 2014-03-23-moss

---

<figure class="image--wide">
  {% assign photo = page.photo[0] %}
  {% include helper/photo-from-collection.liquid %}
  {% include block/srcset.html %}
</figure>

<div class="grid--wide">
  <figure class="grid-figure">
    {% assign photo = page.photo[1] %}
    {% include helper/photo-from-collection.liquid %}
    {% include block/srcset_grid2.html %}
  </figure>
  <figure class="grid-figure">
    {% assign photo = page.photo[2] %}
    {% include helper/photo-from-collection.liquid %}
    {% include block/srcset_grid2.html %}
  </figure>
</div>
