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

<figure class="image--wide">
  <input type="radio" role="radio" name="shift1" class="shift-back" id="shift-back1">
  <input type="radio" role="radio" name="shift1" class="shift-overlay" id="shift-overlay1">
  <input type="radio" role="radio" name="shift1" class="shift-map" id="shift-map1">
  <div class="container map-background" id="i1">
    <img
      src="{{ site.image-url }}/{{ page.image[1].src }}"
      sizes="{{ site.wide-sizes }}"
      srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image-url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[1].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
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
