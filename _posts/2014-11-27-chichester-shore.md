---
title: 'The shore at Bosham in Chichester&nbsp;Harbor'
layout: edgeless
theme: dark
category: 'photography'
tags:
  - 'travel'
updated: 2014-11-28 03:06
drafted: 2014-03-23 12:34
unique_id: 2014-03-23:chichester-shore
description: 'On a visit to Chichester in southern England, I visited the waterside at Bosham.'
photo:
  - 2014-03-23-chichester-sky
  - 2014-03-23-chichester-shore
  - 2014-03-23-moss

---

{% assign photo = page.photo[0] %}
{% include block/image--photo.html class="image--wide" %}

<div class="grid--wide">
  {% assign photo = page.photo[1] %}
  {% include block/image--photo--grid2.html class="grid-figure" %}

  {% assign photo = page.photo[2] %}
  {% include block/image--photo--grid2.html class="grid-figure" %}
</div>
