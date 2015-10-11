---
title: 'Chichester street reflection'
layout: edgeless
option:
  - dark
  - map-meta
  - srcset
category: 'photography'
tags:
  - 'travel'
date: 2014-11-27 20:20
updated: 2014-11-28 03:07
drafted: 2014-03-23 12:34
unique-id: 2014-03-23:chichester-street-reflection
description: 'After the rain in Chichester, on a brief trip to England.'
image:
  - src: 2014-03-23-chichester-street-reflection-olivermakes-ccbync.jpg
    alt: 'Reflections from a puddle where a street meets a sidewalk'
    caption: 'After the rain in Chichester, West Sussex'
    date: 2014-03-23
    camera: 'Apple iPhone 5S'
    lens: 'iPhone f/2.2'
    focal: '4.12mm'
    aperture: 'f/2.2'
    shutter: '1/120'
    iso: 50
    location: 'Central Chichester, UK'
    latitude: 50.8387
    longitude: -0.7782
    zoom: 16
    description: 'VSCOcam m5 preset'
    aspect: '3:2'

---

<figure class="image--wide">
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}"
    sizes="{{ site.wide-sizes }}"
    srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image-url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}">
</figure>
