---
title: 'Chichester by the shore'
layout: photo
category: photo
date: 2014-03-23 12:35
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
    latitude: 50.828
    longitude: 0.8599
    description: VSCOcam a2
    aspect: '4:3'
  - src: 2014-03-23-chichester-shore-close-olivermakes-ccbync.jpg
    alt: 'Close view of moss, concrete and water on a shoreline'
    date: 2014-03-23
    camera: 'Apple iPhone 5S'
    lens: 'iPhone f/2.2'
    focal: '4.12mm'
    aperture: 'f/2.2'
    shutter: '1/1,050'
    iso: 32
    latitude: 50.8286
    longitude: 0.8574
    description: VSCOcam n1
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
    latitude: 50.8286
    longitude: 0.8593
    description: VSCOcam k1
    aspect: '3:2'

---

<figure class="wide"> 
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}" 
    sizes="{{ site.wide-sizes }}"  
    srcset="{% for srcset in site.srcset %}{{ site.image-url }}/{{ site.srcset[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}"
  >
</figure>

<section class="grid-2">
  <figure> 
    <img
      src="{{ site.image-url }}/{{ page.image[1].src }}" 
      sizes="{{ site.grid2-sizes }}"  
      srcset="{% for srcset_half in site.srcset_half %}{{ site.image-url }}/{{ site.srcset_half[forloop.index0] }}/{{ page.image[1].src }} {{ site.srcset_half[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
      alt="{{ page.image[1].alt }}"
    >
  </figure>
  <figure> 
    <img
      src="{{ site.image-url }}/{{ page.image[2].src }}" 
      sizes="{{ site.grid2-sizes }}"  
      srcset="{% for srcset_half in site.srcset_half %}{{ site.image-url }}/{{ site.srcset_half[forloop.index0] }}/{{ page.image[2].src }} {{ site.srcset_half[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
      alt="{{ page.image[2].alt }}"
    >
  </figure>
</section>