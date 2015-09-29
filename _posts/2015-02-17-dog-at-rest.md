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