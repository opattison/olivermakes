---
title: 'Mount Pleasant'
layout: 'photo'
category: 'photo'
date: 2014-11-14 00:01
updated: 2014-12-05 00:40
unique-id: 2014-11-14:mount-pleasant
description: 'Photos from a neighborhood in Washington, DC; processed with VSCO Film 04.'
image:
  - src: 2014-01-20-orange-leaves-olivermakes-ccbync.jpg
    alt: 'Backlit orange leaves'
    date: 2014-01-20
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/5'
    shutter: '1/800'
    iso: 500
    latitude: 38.9298
    longitude: 77.0438
    description: 'VSCO Film Kodak E200'
  - src: 2014-01-20-bark-close-olivermakes-ccbync.jpg
    alt: 'Close view of tree bark in a residential neighborhood'
    date: 2014-01-20
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/5'
    shutter: '1/210'
    iso: 200
    latitude: 38.9329
    longitude: 77.0413
    description: 'VSCO Film Kodak E200'
  - src: 2014-01-20-sidewalk-olivermakes-ccbync.jpg
    alt: 'Small green leaves growing from a rocky wall next to a sidewalk'
    date: 2014-01-20
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/2.5'
    shutter: '1/640'
    iso: 200
    latitude: 38.9298
    longitude: 77.0438
    description: 'VSCO Film Kodak E200'

---

<figure class="wide"> 
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}" 
    sizes="{{ site.wide-sizes }}"
    srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image-url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}"
  >
</figure>

<figure class="wide"> 
  <img
    src="{{ site.image-url }}/{{ page.image[1].src }}" 
    sizes="{{ site.wide-sizes }}"
    srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image-url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[1].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[1].alt }}"
  >
</figure>

<figure class="wide"> 
  <img
    src="{{ site.image-url }}/{{ page.image[2].src }}" 
    sizes="{{ site.wide-sizes }}"
    srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image-url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[2].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[2].alt }}"
  >
</figure>


<section class="essay">
<h2>Photos from a neighborhood in Washington, DC</h2>
<p>These are some of my favorite photos from a walk around the Mount Pleasant neighborhood in January 2014, shot with a Fujifilm X-E2 and Fujinon XF35mmF1.4 R lens. I revisited the set in November 2014, and processed them with Kodak E200 settings from the <a href="http://vsco.co/film/04/lightroom">VSCO Film 04 pack</a> for Lightroom. Editing raw images in Lightroom and VSCO Film is now a core part of how I process my photos. I have found myself becoming more creative and loose with processing over time, with the realization that what comes out of a digital camera is not mechanically “true” to a scene.</p>
<p>A photo is not unfiltered, but rather heavily influenced by software processing from a camera. In the moment of shooting, I can take care with light, composition, aperture, shutter, and more – but the camera has an “opinion” about how the shot should turn out, expressed in its software and color output. I choose to shoot raw images so that my camera’s opinion is not hard-coded to a lossy and less flexible JPEG image, but rather is quite malleable in post-processing software like Lightroom, alongside enhancing tools like VSCO Film 04. With raw post-processing, I have headroom to edit: to correct small imbalances of light and shadow, and to determine a shift of color and contrast that suits the scene.</p>
</section>