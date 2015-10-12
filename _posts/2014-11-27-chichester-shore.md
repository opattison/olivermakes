---
title: 'The shore at Bosham in Chichester&nbsp;Harbor'
layout: edgeless
option:
  - dark
  - map-meta
  - srcset
category: 'photography'
tags:
  - 'travel'
date: 2014-11-27 21:30
updated: 2014-11-28 03:06
drafted: 2014-03-23 12:34
unique-id: 2014-03-23:chichester-shore
description: 'On a visit to Chichester in southern England, I visited the waterside at Bosham.'
image:
  - src: 2014-03-23-chichester-sky-olivermakes-ccbync.jpg
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
  - src: 2014-03-23-chichester-shore-close-olivermakes-ccbync.jpg
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
  - src: 2014-03-23-moss-on-bricks-olivermakes-ccbync.jpg
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
    src="{{ site.image-url }}/{{ page.image[0].src }}"
    sizes="{{ site.wide-sizes }}"
    srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image-url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}">
</figure>

<div class="grid grid--wide">
<figure class="grid-figure">
  <img
    src="{{ site.image-url }}/{{ page.image[1].src }}"
    sizes="{{ site.grid2-sizes }}"
    srcset="{% for srcset1080 in site.srcset1080 %}{{ site.image-url }}/{{ site.srcset1080[forloop.index0] }}/{{ page.image[1].src }} {{ site.srcset1080[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[1].alt }}">
</figure>
<figure class="grid-figure">
  <img
    src="{{ site.image-url }}/{{ page.image[2].src }}"
    sizes="{{ site.grid2-sizes }}"
    srcset="{% for srcset1080 in site.srcset1080 %}{{ site.image-url }}/{{ site.srcset1080[forloop.index0] }}/{{ page.image[2].src }} {{ site.srcset1080[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[2].alt }}">
</figure>
</section>
