---
title: 'My turntable'
layout: photo
category: photo
date: 2014-11-27 19:02
updated: 2014-11-27 19:12
unique-id: 2014-11-27:turntable
image:
  - src: 2014-06-15-turntable-kodak-portra-400-olivermakes-ccbync.jpg
    alt: 'The tone arm of a record player'
    date: 2014-06-15
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/3.2'
    shutter: '1/80'
    iso: 2000
    latitude: 38.9172
    longitude: -77.0460
    description: 'VSCO Film Kodak Portra 400'

---

<figure class="wide"> 
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}"
    sizes="{{ site.wide-sizes }}"
    srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image-url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}"
  >
</figure>