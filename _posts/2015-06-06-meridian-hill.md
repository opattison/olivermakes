---
title: 'Meridian Hill Park'
layout: edgeless
option:
  - dark
  - index-image
  - map-meta
  - srcset
category: 'photography'
tags:
  - 'dc'
date: 2015-06-06 13:20
updated: 2015-06-06 13:20
unique-id: 2015-06-06:meridian-hill
description: 'A single shallow shot at a local DC park fountain walkway.'
image:
  - src: 2014-02-22-meridian-hill-olivermakes-ccbync.jpg
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

<figure class="wide">
  <input type="radio" role="radio" name="shift0" class="shift-back" id="shift-back0">
  <input type="radio" role="radio" name="shift0" class="shift-overlay" id="shift-overlay0">
  <input type="radio" role="radio" name="shift0" class="shift-map" id="shift-map0">
  <div class="container map-background" id="i0">
    <img
      src="{{ site.image-url }}/{{ page.image[0].src }}"
      sizes="{{ site.wide-sizes }}"
      srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image-url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
       alt="{{ page.image[0].alt }}"
    >
    <label for="shift-back0" class="shift-back-label"></label>
    <label for="shift-overlay0" class="shift-overlay-label"></label>
    <div class="photo-meta overlay">
      <div class="camera-icon {% if page.image[0].camera contains 'iPhone 5S' %}icon-iphone5s{% elsif page.image[0].camera contains 'X-E2' %}icon-fxe2{% endif %}"></div>
      <ul class="camera-details">
        <li>Camera: {{ page.image[0].camera }}</li>
        <li>Lens: {{ page.image[0].lens }} at {{ page.image[0].focal }}</li>
        <li>Exposure: {{ page.image[0].aperture }} | {{ page.image[0].shutter }} s | ISO {{ page.image[0].iso }}</li>
        <li>Date: {{ page.image[0].date }}</li>
        <li>Location: {{ page.image[0].location }}</li>
      </ul>
      <label for="shift-map0" class="shift-map-label">View map</label>
    </div>
  </div>
</figure>
