---
title: 'Meridian Hill Park'
layout: edgeless
theme: dark
option:
  - map-meta
category: 'photography'
tags:
  - 'dc'
date: 2015-06-06 13:20
updated: 2015-06-06 13:20
unique_id: 2015-06-06:meridian-hill
description: 'A single shallow shot at a local DC park fountain walkway.'
image:
  - src: /images/2014-02-22-meridian-hill-olivermakes-ccbync.jpg
    alt: 'Pebble-stone ground in Meridian Hill Park'
    caption: 'Meridian Hill Park in DC in early 2014. Re-processed with VSCO Film 04 (Fuji Astia 100F Balance Warm).'
    date: 2014-02-22
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/4.5'
    shutter: '1/600'
    iso: 200
    latitude: 38.9198
    longitude: -77.0353
    location: 'South fountains at Meridian Hill Park (also known as Malcolm X Park)'
    description: 'Processed ‘Fuji Astia 100F Balance Warm’ in VSCO Film'
    aspect: '3:2'
    zoom: 15

---

<figure class="image--wide">
  <img
    src="{{ page.image[0].src | imgix_url: w: 720, q: 60 }}"
    sizes="{{ site.sizes }}"
    srcset="{% for source in site.srcset %}{{ page.image[0].src | imgix_url: w: site.srcset[forloop.index0], q: 70 }} {{ site.srcset[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}">
</figure>
