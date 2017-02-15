---
title: 'jeanandoliver.space'
layout: edgeless
theme: light
category: 'projects'
option:
  - minor
tags:
  - 'design'
  - 'photography'
  - 'typography'
  - 'web'
updated: 2017-02-14 16:53
drafted: 2017-02-14 16:53
period: 2016-11 to present
unique_id: 2016-12-14:jeanandoliver
description: 'A travel and photography archiving collaboration.'
project:
  url: https://jeanandoliver.space
  source: https://github.com/opattison/jeanandoliver/
image_index: 2017-02-14-jeanandoliver-index-crop.jpg
image:
  - src: 2017-02-14-jeanandoliver-index-crop.jpg
    alt: 'The home page for jeanandoliver.space'
  - src: 2017-02-07-jeanandoliver-type.png
    alt: 'Typographic and layout sample from Jean and Oliver'
    caption: 'Body text underneath a photo grid from [an inner page](https://jeanandoliver.space/2016/cabin/).'
  - src: 2017-01-23-mount-hunger-grid.png
    alt: 'An asymmetric grid of photos.'
    caption: 'A fluid grid layout from [one of the photo collections](https://jeanandoliver.space/2016/mount-hunger-peak/).'
---

This is an experiment in [photography and storytelling](https://jeanandoliver.space) by me and Jean Flanagan. The first iteration of it collects photos from our fall 2016 trip and wedding in Vermont. This project was implemented using [fluid typography]({% post_url 2017-02-01-fluid-typography %}) and [fluid grids]({% post_url 2017-01-30-fluid-grid %}).

{% assign image = page.image[1] %}
{% include block/image.html class="image--wide" %}

{% assign image = page.image[2] %}
{% include block/image.html class="image--wide" %}

The site’s design is based on a slightly asymmetric layout. Images are laid out in masonry-like grid, with images fitting together precisely with thin gutters.

---

## Further reading

{% include block/project--satellite.html id="2017-02-01:fluid-typography" %}

{% include block/project--satellite.html id="2017-01-30:fluid-grid" %}
