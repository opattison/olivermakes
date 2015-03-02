---
title: 'Patterns'
layout: singel
option:
  - code
  - code-block
  - srcset
  - patterns
category: meta
date: 2014-10-31 18:25
updated: 2014-11-29 11:20
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

<ul class="swatches">
{% assign swatches = site.data.shade %}
{% for swatch in swatches %}
<li><figure style="background-color: {{ swatch.hsl }}"><figcaption>{{ swatch.name }}<br>{{ swatch.hsl }}<br>{{ swatch.hex }}</figcaption></figure></li>
{% endfor %}
</ul>

### Colors

<ul class="swatches">
{% assign swatches = site.data.color %}
{% for swatch in swatches %}
<li><figure style="background-color: {{ swatch.hsl }}"><figcaption>{{ swatch.name }}<br>{{ swatch.hsl }}<br>{{ swatch.hex }}</figcaption></figure></li>
{% endfor %}
</ul>

### Semi-transparent shades and colors

<ul class="swatches">
{% assign swatches = site.data.transparent %}
{% for swatch in swatches %}
<li><figure style="background-color: {{ swatch.hsl }}"><figcaption>{{ swatch.name }}<br>{{ swatch.hsl }}<br>{{ swatch.hex }}</figcaption></figure></li>
{% endfor %}
</ul>

- - -

## Use of typography

### Ratio font family (300-500)

I’m Oliver Pattison, a designer focused on the future of the web.
{:.sans .w300}

I’m Oliver Pattison, a designer focused on the future of the web.
{:.sans .w300 .italic}

I’m Oliver Pattison, a designer focused on the future of the web.
{:.sans .w400}

I’m Oliver Pattison, a designer focused on the future of the web.
{:.sans .w400 .italic}

I’m Oliver Pattison, a designer focused on the future of the web.
{:.sans .w500}

I’m Oliver Pattison, a designer focused on the future of the web.
{:.sans .w500 .italic}

```
$ratio: 'ratio', 'Helvetica Neue', 'Roboto', Arial, sans-serif;
```

### Source Code Pro font family (400)

I’m Oliver Pattison, a designer focused on the future of the web.
{:.monospace}

```
$source-code-pro: 'source-code-pro', Menlo, Consolas, monospace;
```


- - -

## Common patterns (with code examples)

{% for pattern in site.patterns %}
{% include meta/pattern.html %}
{% endfor %}