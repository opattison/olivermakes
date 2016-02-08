---
title: 'The shore at Bosham in Chichester&nbsp;Harbor'
layout: edgeless
theme: dark
option:
  - map-meta
category: 'photography'
tags:
  - 'travel'
date: 2014-11-27 21:30
updated: 2014-11-28 03:06
drafted: 2014-03-23 12:34
unique_id: 2014-03-23:chichester-shore
description: 'On a visit to Chichester in southern England, I visited the waterside at Bosham.'
image:
  - src: /images/2014-03-23-chichester-sky-olivermakes-ccbync.jpg
    alt: 'An aging brick boathouse and a cloudy sky near sunset'
    date: 2014-03-23
    camera: 'Apple iPhone 5S'
    lens: 'iPhone f/2.2'
    focal: '4.12mm'
    aperture: 'f/2.2'
    shutter: '1/1300'
    iso: 32
    location: 'Bosham, near Chichester'
    latitude: 50.828
    longitude: -0.8599
    zoom: 14
    description: 'VSCOcam a2'
    aspect: '4:3'
  - src: /images/2014-03-23-chichester-shore-close-olivermakes-ccbync.jpg
    alt: 'Close view of moss, concrete and water on a shoreline'
    date: 2014-03-23
    camera: 'Apple iPhone 5S'
    lens: 'iPhone f/2.2'
    focal: '4.12mm'
    aperture: 'f/2.2'
    shutter: '1/1050'
    iso: 32
    location: 'Bosham, near Chichester'
    latitude: 50.8286
    longitude: -0.8574
    zoom: 14
    description: 'VSCOcam n1'
    aspect: '3:2'
  - src: /images/2014-03-23-moss-on-bricks-olivermakes-ccbync.jpg
    alt: 'Wisps of moss on a brick, highlighted by sun, with trees and sky far in the background'
    date: 2014-03-23
    camera: 'Apple iPhone 5S'
    lens: 'iPhone f/2.2'
    focal: '4.12mm'
    aperture: 'f/2.2'
    shutter: '1/340'
    iso: 32
    location: 'Bosham, near Chichester'
    latitude: 50.8286
    longitude: -0.8593
    zoom: 14
    description: 'VSCOcam k1'
    aspect: '3:2'

---

<figure class="image--wide">
  <img
    src="{{ page.image[0].src | imgix_url: w: 720, q: 60 }}"
    sizes="{{ site.sizes }}"
    srcset="{% for width in site.srcset %}{{ page.image[0].src | imgix_url: w: width, q: 60 }} {{ width }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}">
</figure>

<div class="grid--wide">
  <figure class="grid-figure">
    <img
      src="{{ page.image[1].src | imgix_url: w: 640, q: 50 }}"
      sizes="{{ site.sizes_grid2 }}"
      srcset="{% for width in site.srcset_grid2 %}{{ page.image[1].src | imgix_url: w: width, q: 50 }} {{ width }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
      alt="{{ page.image[1].alt }}">
  </figure>
  <figure class="grid-figure">
    <img
      src="{{ page.image[2].src | imgix_url: w: 640, q: 50 }}"
      sizes="{{ site.sizes_grid2 }}"
      srcset="{% for width in site.srcset_grid2 %}{{ page.image[2].src | imgix_url: w: width, q: 50 }} {{ width }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
      alt="{{ page.image[2].alt }}">
  </figure>
</div>
