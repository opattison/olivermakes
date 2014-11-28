---
title: 'Chichester street reflection'
layout: photo
category: photo
date: 2014-03-23 12:34
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
    latitude: 50.8387
    longitude: -0.7782
    description: 'VSCOcam m5 preset'

---

<figure class="wide"> 
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}" 
    sizes="{{ site.photo-sizes }}"  
    srcset="{% for srcset in site.srcset %}{{ site.image-url }}/{{ site.srcset[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}"
  >
  <figcaption>{{ page.image[0].caption | markdownify }}</figcaption>
</figure>