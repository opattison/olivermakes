---
title: 'All Patterns'
layout: edgeless
option:
  - code
  - code-block
  - srcset
  - patterns
category: meta
date: 2014-10-31 18:25
updated: 2016-01-22 15:10
description: 'A collection of patterns for this website.'
source: https://github.com/opattison/olivermakes
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

---

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

```
$source-code-pro: 'source-code-pro', Menlo, Consolas, monospace;
```

---

## Text

{% include block/pattern_loop--text.html %}

---

## Components

{% include block/pattern_loop--component.html %}

---

## Interface

{% include block/pattern_loop--interface.html %}
