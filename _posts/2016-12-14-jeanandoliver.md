---
title: 'Field Notes'
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
updated: 2017-04-27 19:25
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
    alt: 'A sample photographic grid from the Field Notes site'
  - src: 2017-04-27-fieldnotes-type.jpg
    alt: 'Typographic and layout sample from Jean and Oliver'
    caption: 'Body text underneath a photo grid from [an inner page](https://jeanandoliver.space/2016/cabin/).'
  - src: 2017-04-27-fieldnotes-mthunger-grid.jpg
    alt: 'An asymmetric grid of photos.'
    caption: 'A fluid grid layout from [one of the photo collections](https://jeanandoliver.space/2016/mount-hunger-peak/).'
  - src: 2017-04-27-fieldnotes-home.jpg
    alt: 'The home page for Field Notes'
    caption: 'The home page of the Field Notes site features a logotype set in the typeface [Acumin](https://acumin.typekit.com).'
---

[“Field Notes by Jean and Oliver”](https://jeanandoliver.space) is an experiment in photography and storytelling by me and Jean Flanagan. The first iteration of it collected photos from our fall 2016 trip and wedding in Vermont. The early 2017 iteration now features an index page with collections of photographs, and a reworked color scheme.

This project was implemented using [fluid typography]({% post_url 2017-02-01-fluid-typography %}) and [fluid grids]({% post_url 2017-01-30-fluid-grid %}), two techniques of responsive web design.

{% assign image = page.image[1] %}
{% include block/image.html class="image--wide screenshot" %}

The site’s design is based on a slightly asymmetric layout. Images are laid out in a [masonry-like grid]({% post_url 2017-01-30-fluid-grid %}), with images fitting together precisely with thin gutters.

{% assign image = page.image[2] %}
{% include block/image.html class="image--wide screenshot" %}

{% assign image = page.image[3] %}
{% include block/image.html class="image--wide screenshot" %}

---

## Further reading

{% include block/project--satellite.html id="2017-02-01:fluid-typography" %}

{% include block/project--satellite.html id="2017-01-30:fluid-grid" %}
