---
title: 'My turntable'
layout: photo
category: photo
date: 2014-11-27 19:02
image:
  - src: 2014-06-15-turntable-kodak-portra-400-ccbync.jpg
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

---

<figure class="wide"> 
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}" 
    sizes="{{ site.photo-sizes }}"  
    srcset="{% for srcset in site.srcset %}{{ site.image-url }}/{{ site.srcset[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}"
  >
</figure>