---
title: 'Patterns'
layout: edgeless
option:
  - code
  - code-block
  - srcset
  - patterns
category: meta
date: 2014-10-31 18:25
updated: 2015-10-11 21:00
description: 'A collection of patterns for this website.'
image:
  - src: 'logo.svg'
    caption: 'Shown here in the standard color scheme of the site, this logo appears in different contexts on different pages.'
    alt: 'the logo for this website'
  - src: 'image.gif'
    caption: 'This is a caption pulled from the yaml front matter. It describes the image in the same `figure` element. By&nbsp;<cite>Oliver&nbsp;Pattison</cite>.'
    alt: 'A placeholder image'

---

This pattern library is a work in progress. Take a look at the [style guide](/styles/) as well.

- - -

## Use of color

### Shades

<ul class="grid grid--swatches">
{% assign swatches = site.data.shade %}
{% for swatch in swatches %}
{% include block/pattern--swatch.html %}
{% endfor %}
</ul>

### Colors

<ul class="grid grid--swatches">
{% assign swatches = site.data.color %}
{% for swatch in swatches %}
{% include block/pattern--swatch.html %}
{% endfor %}
</ul>

### Semi-transparent shades and colors

<ul class="grid grid--swatches">
{% assign swatches = site.data.transparent %}
{% for swatch in swatches %}
{% include block/pattern--swatch.html %}
{% endfor %}
</ul>

- - -

## Use of typography

### Ratio font family (300, 400, 500)

{% include block/pattern--type.html class='sans w300' %}

{% include block/pattern--type.html class='sans w300 italic' %}

{% include block/pattern--type.html class='sans w400' %}

{% include block/pattern--type.html class='sans w400 italic' %}

{% include block/pattern--type.html class='sans w500' %}

{% include block/pattern--type.html class='sans w500 italic' %}

```
$ratio: 'ratio', 'Helvetica Neue', 'Roboto', Arial, sans-serif;
```

### Source Code Pro font family (400)

{% include block/pattern--type.html class='monospace' %}
{:.monospace}

```
$source-code-pro: 'source-code-pro', Menlo, Consolas, monospace;
```


- - -

## Common patterns (with code examples)

{% for pattern in site.patterns %}
{% include block/pattern--element.html %}
{% endfor %}
