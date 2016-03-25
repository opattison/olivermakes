---
title: 'Color Patterns'
title_ui: 'colors'
layout: pattern
option:
  - code
category: patterns
date: 2014-10-31 18:24
updated: 2016-03-20 22:07
description: 'All of the colors and shades used on this site, with code and specification for each.'
source: https://github.com/opattison/olivermakes
image:
  - src: /images/2016-03-16-flag.svg
    src_png: /images/2016-03-16-flag.png
---

## Shades

<ul class="grid--swatches no-bullets">
{% assign swatches = site.data.shade %}
{% for swatch in swatches %}
{% include block/pattern--swatch.html %}
{% endfor %}
</ul>

## Colors

<ul class="grid--swatches no-bullets">
{% assign swatches = site.data.color %}
{% for swatch in swatches %}
{% include block/pattern--swatch.html %}
{% endfor %}
</ul>

## Semi-transparent shades and colors

<ul class="grid--swatches no-bullets">
{% assign swatches = site.data.transparent %}
{% for swatch in swatches %}
{% include block/pattern--swatch.html %}
{% endfor %}
</ul>

---

## `paper` theme

This is used on several pages, reusing all of the colors above but replacing the shades.
{:.content--pattern}

<ul class="grid--swatches no-bullets">
{% assign swatches = site.data.theme_paper %}
{% for swatch in swatches %}
{% include block/pattern--swatch.html %}
{% endfor %}
</ul>
