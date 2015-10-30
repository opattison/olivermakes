---
title: 'Color Patterns'
layout: edgeless
option:
  - code
  - code-block
  - srcset
  - patterns
category: meta
date: 2014-10-31 18:25
updated: 2015-10-12 20:49
description: 'A collection of patterns for this website.'
---

## Shades

<ul class="grid grid--swatches">
{% assign swatches = site.data.shade %}
{% for swatch in swatches %}
{% include block/pattern--swatch.html %}
{% endfor %}
</ul>

## Colors

<ul class="grid grid--swatches">
{% assign swatches = site.data.color %}
{% for swatch in swatches %}
{% include block/pattern--swatch.html %}
{% endfor %}
</ul>

## Semi-transparent shades and colors

<ul class="grid grid--swatches">
{% assign swatches = site.data.transparent %}
{% for swatch in swatches %}
{% include block/pattern--swatch.html %}
{% endfor %}
</ul>
