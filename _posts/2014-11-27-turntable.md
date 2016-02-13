---
title: 'My turntable'
layout: edgeless
theme: dark
option:
  - map-meta
category: 'photography'
tags:
  - 'music'
date: 2014-11-27 19:02
updated: 2014-12-05 01:29
drafted: 2014-11-27 19:02
unique_id: 2014-11-27:turntable
description: 'A close-up view of my record player.'
image:
  - src: /images/2014-06-15-turntable-kodak-portra-400-olivermakes-ccbync.jpg
    alt: 'The tone arm of a record player'
    caption: 'My record player at home, captured in low light with a fast lens. This photo was re-processed with VSCO Film 02 (Kodak Portra 400).'
    date: 2014-06-15
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/3.2'
    shutter: '1/80'
    iso: 2000
    location: 'Washington, DC'
    latitude: 38.9172
    longitude: -77.0460
    zoom: 15
    description: 'VSCO Film Kodak Portra 400'

---

<figure class="image--wide">
  {% assign count = 0 %}
  {% assign quality = 75 %}
  {% include block/srcset.html %}
  <figcaption>{{ page.image[0].caption | markdownify }}</figcaption>
</figure>
