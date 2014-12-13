---
title: 'My turntable'
layout: contrast
option:
  - map-meta
category: photo
date: 2014-11-27 19:02
updated: 2014-12-05 01:29
drafted: 2014-11-27 19:02
unique-id: 2014-11-27:turntable
description: 'A close-up view of my record player.'
image:
  - src: 2014-06-15-turntable-kodak-portra-400-olivermakes-ccbync.jpg
    alt: 'The tone arm of a record player'
    caption: 'My record player at home, captured in low light with a fast lens. This photo was re-processed with VSCO Film 02 (Kodak Portra 400).'
    date: 2014-06-15
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/3.2'
    shutter: '1/80'
    iso: 2000
    location: 'Washington, DC'
    latitude: 38.9172
    longitude: -77.0460
    zoom: 15
    description: 'VSCO Film Kodak Portra 400'

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
      <label for="shift-map0" class="shift-map-label">View map{% include icon/location.html %}</label>
    </div>
  </div>
  <figcaption>{{ page.image[0].caption | markdownify }}</figcaption>
</figure>