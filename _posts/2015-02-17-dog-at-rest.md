---
title: 'Dog at rest'
layout: edgeless
option:
  - dark
  - map-meta
  - srcset
category: 'photography'
tags:
  - 'dog'
date: 2015-02-17 19:25
updated: 2015-02-17 19:25
unique-id: 2015-02-17:dog-at-rest
description: 'Our dog Sapphie loves relaxing on the couch, which makes her an easy subject.'
image:
  - src: 2014-12-14-dog-at-rest-olivermakes-ccbync.jpg
    alt: 'A close-up of the head of a black dog in side profile, looking out into a living room.'
    date: 2014-12-14
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/1.4'
    shutter: '1/55'
    iso: 4000
    description: 'Our dog Sapphie loves relaxing on the couch, which makes her an easy subject.'
    location: 'Washington, DC'
    latitude: 38.9172
    longitude: -77.0461
    zoom: 15
    aspect: '3:2'

---

<figure class="image--wide">
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}"
    sizes="{{ site.wide-sizes }}"
    srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image-url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}">
</figure>
