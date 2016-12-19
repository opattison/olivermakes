---
title: 'Color Patterns'
title_ui: 'colors'
updated: 2016-03-20 22:07
description: 'All of the colors and shades used on this site, with code and specification for each.'
source: https://github.com/opattison/olivermakes
image:
  - src: /images/2016-03-16-flag.svg
    src_png: /images/2016-03-16-flag.png
priority: 1
---

## Shades

{% assign swatches = site.data.shade %}
{% include meta/grid--swatches.html %}

## Colors

{% assign swatches = site.data.color %}
{% include meta/grid--swatches.html %}

## Semi-transparent shades and colors

{% assign swatches = site.data.transparent %}
{% include meta/grid--swatches.html %}

---

## `paper` theme

This is used on several pages, reusing all of the colors above but replacing the shades.
{:.content--pattern}

{% assign swatches = site.data.theme_paper %}
{% include meta/grid--swatches.html %}
