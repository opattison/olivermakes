---
title: 'Summer at the National Arboretum'
layout: edgeless
option:
  - dark
  - index-image
  - map-meta
  - srcset
category: 'photography'
tags:
  - 'dc'
date: 2015-06-07 19:36
updated: 2015-06-07 19:36
unique-id: 2015-06-07:arboretum
description: 'Scenes from an afternoon visiting the Asian Collections at DC’s arboretum.'
image:
  - src: 2014-06-29-aristotles-eyes-olivermakes-ccbync.jpg
    alt: 'A book open to a page with the title “Aristotle‘s Eyes”, set in a grassy, shady garden.'
    date: 2014-06-29
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/4.5'
    shutter: '1/320'
    iso: 320
    latitude: 38.9124
    longitude: -76.9556
    location: 'Asian Collections, National Arboretum'
    description: 'Processed ‘Kodak E100G Vibrant’ in VSCO Film'
    aspect: '3:2'
    zoom: 16
  - src: 2014-06-29-arboretum-olivermakes-ccbync.jpg
    alt: 'Sunlit evergreen plants in a garden'
    date: 2014-06-29
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/1.8'
    shutter: '1/4000'
    iso: 200
    latitude: 38.9124
    longitude: -76.9556
    location: 'Asian Collections, National Arboretum'
    aspect: '3:2'
    zoom: 16

---

<figure class="image--wide">
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}"
    sizes="{{ site.wide-sizes }}"
    srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image-url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}">
</figure>

<figure class="image--wide">
  <img
    src="{{ site.image-url }}/{{ page.image[1].src }}"
    sizes="{{ site.wide-sizes }}"
    srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image-url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[1].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[1].alt }}">
</figure>
