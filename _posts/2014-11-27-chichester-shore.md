---
title: 'The shore at Bosham in Chichester&nbsp;Harbor'
layout: edgeless
option:
  - dark
  - map-meta
  - srcset
category: 'photography'
tags:
  - 'travel'
date: 2014-11-27 21:30
updated: 2014-11-28 03:06
drafted: 2014-03-23 12:34
unique-id: 2014-03-23:chichester-shore
description: 'On a visit to Chichester in southern England, I visited the waterside at Bosham.'
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
    location: 'Bosham, near Chichester'
    latitude: 50.828
    longitude: -0.8599
    zoom: 14
    description: 'VSCOcam a2'
    aspect: '4:3'
  - src: 2014-03-23-chichester-shore-close-olivermakes-ccbync.jpg
    alt: 'Close view of moss, concrete and water on a shoreline'
    date: 2014-03-23
    camera: 'Apple iPhone 5S'
    lens: 'iPhone f/2.2'
    focal: '4.12mm'
    aperture: 'f/2.2'
    shutter: '1/1050'
    iso: 32
    location: 'Bosham, near Chichester'
    latitude: 50.8286
    longitude: -0.8574
    zoom: 14
    description: 'VSCOcam n1'
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
    location: 'Bosham, near Chichester'
    latitude: 50.8286
    longitude: -0.8593
    zoom: 14
    description: 'VSCOcam k1'
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

<div class="grid grid--wide">
<figure class="grid-figure">
  <input type="radio" role="radio" name="shift1" class="shift-back" id="shift-back1">
  <input type="radio" role="radio" name="shift1" class="shift-overlay" id="shift-overlay1">
  <input type="radio" role="radio" name="shift1" class="shift-map" id="shift-map1">
  <div class="container map-background" id="i1">
    <img
      src="{{ site.image-url }}/{{ page.image[1].src }}"
      sizes="{{ site.grid2-sizes }}"
      srcset="{% for srcset1080 in site.srcset1080 %}{{ site.image-url }}/{{ site.srcset1080[forloop.index0] }}/{{ page.image[1].src }} {{ site.srcset1080[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
      alt="{{ page.image[1].alt }}"
    >
    <label for="shift-back1" class="shift-back-label"></label>
    <label for="shift-overlay1" class="shift-overlay-label"></label>
    <div class="photo-meta overlay">
      <div class="camera-icon {% if page.image[1].camera contains 'iPhone 5S' %}icon-iphone5s{% elsif page.image[1].camera contains 'X-E2' %}icon-fxe2{% endif %}"></div>
      <ul class="camera-details">
        <li>Camera: {{ page.image[1].camera }}</li>
        <li>Lens: {{ page.image[1].lens }} at {{ page.image[1].focal }}</li>
        <li>Exposure: {{ page.image[1].aperture }} | {{ page.image[1].shutter }} s | ISO {{ page.image[1].iso }}</li>
        <li>Date: {{ page.image[1].date }}</li>
        <li>Location: {{ page.image[1].location }}</li>
      </ul>
      <label for="shift-map1" class="shift-map-label">View map</label>
    </div>
  </div>
</figure>
<figure class="grid-figure">
  <input type="radio" role="radio" name="shift2" class="shift-back" id="shift-back2">
  <input type="radio" role="radio" name="shift2" class="shift-overlay" id="shift-overlay2">
  <input type="radio" role="radio" name="shift2" class="shift-map" id="shift-map2">
  <div class="container map-background" id="i2">
    <img
      src="{{ site.image-url }}/{{ page.image[2].src }}"
      sizes="{{ site.grid2-sizes }}"
      srcset="{% for srcset1080 in site.srcset1080 %}{{ site.image-url }}/{{ site.srcset1080[forloop.index0] }}/{{ page.image[2].src }} {{ site.srcset1080[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
      alt="{{ page.image[2].alt }}"
    >
    <label for="shift-back2" class="shift-back-label"></label>
    <label for="shift-overlay2" class="shift-overlay-label"></label>
    <div class="photo-meta overlay">
      <div class="camera-icon {% if page.image[2].camera contains 'iPhone 5S' %}icon-iphone5s{% elsif page.image[2].camera contains 'X-E2' %}icon-fxe2{% endif %}"></div>
      <ul class="camera-details">
        <li>Camera: {{ page.image[2].camera }}</li>
        <li>Lens: {{ page.image[2].lens }} at {{ page.image[2].focal }}</li>
        <li>Exposure: {{ page.image[2].aperture }} | {{ page.image[2].shutter }} s | ISO {{ page.image[2].iso }}</li>
        <li>Date: {{ page.image[2].date }}</li>
        <li>Location: {{ page.image[2].location }}</li>
      </ul>
      <label for="shift-map2" class="shift-map-label">View map</label>
    </div>
  </div>
</figure>
</section>
