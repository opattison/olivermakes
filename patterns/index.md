---
title: 'Patterns'
layout: category
option:
  - code
  - code-block
  - srcset
  - patterns
category: meta
date: 2014-10-31 18:25
updated: 2015-10-15 23:43
description: 'A collection of patterns for this website.'
image:
  - src: 'logo.svg'
    caption: 'Shown here in the standard color scheme of the site, this logo appears in different contexts on different pages.'
    alt: 'the logo for this website'
  - src: 'image.gif'
    caption: 'This is a caption pulled from the yaml front matter. It describes the image in the same `figure` element. By&nbsp;<cite>Oliver&nbsp;Pattison</cite>.'
    alt: 'A placeholder image'

---

{% include block/primer--pattern.html %}

{% assign items = site.data.pattern_items %}
{% for item in items %}
{% include block/item--pattern.html %}
{% endfor %}

{% include block/index-nav--pattern.html %}
