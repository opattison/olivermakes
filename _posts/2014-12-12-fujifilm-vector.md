---
title: 'Fujifilm X-E2 vector'
layout: edgeless
theme: dark
option:
  - code
  - minor
  - no-imgix-source
category: 'projects'
tags:
  - 'design'
  - 'photography'
date: 2014-12-08 9:00
updated: 2014-12-12 13:16
drafted: 2014-12-12 02:00
unique_id: 2014-12-12:fujifilm-vector
description: 'Hand-designed graphics of my Fujifilm camera, used for photo metadata on this site.'
project:
  download: '/resources/fragments/2014-12-12-xe2-1.1.ai'
  filetype: '.ai'
  license: 'CC BY-NC'
  license-url: 'http://creativecommons.org/licenses/by-nc/4.0/'
image_index: /images/2016-02-01-xe2-1.1.svg
image:
  - src: /images/2016-02-01-xe2-1.1.svg
    src_png: /images/2014-12-12-xe2-1.1.png
    date: 2016-02-01
    description: 'original graphic cropped for project item. index version is cropped and colored gray07'
  - src: /images/2014-12-12-xe2-1.1.svg
    alt: 'vector image of Fujifilm X-E2 digital camera'
    caption: 'The basis for the graphics used on the site. I hand-traced an image of the camera in Adobe Illustrator. I could have automated this process, but I preferred to brush up on Illustrator and create a more maintainable result.'
    date: 2014-12-08
    description: 'original graphic. index version is cropped and colored gray7'
  - src: /images/2014-12-12-fxe2.svg
    alt: 'simplfied vector of Fujifilm X-E2 camera – dark on light'
    caption: 'A simplified version in light&nbsp;…'
  - src: /images/2014-12-12-fxe2-offwhite.svg
    alt: 'simplfied vector of Fujifilm X-E2 camera – light on dark'
    caption: '… and dark themes.'
  - src: /images/2014-12-12-photo-meta-example.jpg
    alt: 'an example of the graphics in action a photo metadata excerpt'
    caption: 'What the vector graphic looks like [in context on a photo page](/2014/11/turntable/).'

---

To complement the metadata on my [photo pages](/photography/), I wanted accurate but minimal vector representations of my cameras (currently a Fujifilm X-E2 and an iPhone 5S), so I had to design my own. Although generic representations of cameras are appropriate for many circumstances (such as indicating a photo gallery on a navigation menu), something more defined was needed for this circumstance. Part of what I am communicating here is “how this photo was created”, so I designed something recognizable as a unique object. After completing the initial work, I realized I would need something even more minimal for smaller sizes (20% of a screen width or much smaller), so I abstracted the icon even further.

<figure class="image--wide svg light noedges">
  <img
    src="{{ page.image[1].src }}"
    alt="{{ page.image[1].alt }}">
  <figcaption>{{ page.image[1].caption | markdownify }}</figcaption>
</figure>

<div class="grid--wide">
  <figure class="grid-figure svg light noedges">
    <img
      src="{{ page.image[2].src }}"
      alt="{{ page.image[2].alt }}">
    <figcaption>{{ page.image[2].caption | markdownify }}</figcaption>
  </figure>
  <figure class="grid-figure svg dark noedges">
    <img
      src="{{ page.image[3].src }}"
      alt="{{ page.image[3].alt }}">
    <figcaption>{{ page.image[3].caption | markdownify }}</figcaption>
  </figure>
</div>

<figure class="image--wide">
  {% assign count = 4 %}
  {% assign quality = 60 %}
  {% include block/srcset.html %}
  <figcaption>{{ page.image[4].caption | markdownify }}</figcaption>
</figure>

## Vector graphics

As a format, <abbr title="Scalable Vector Graphics">SVG</abbr> has plenty of advantages:

- **It is tiny:** it typically takes up only a few hundred bytes up to a few kilobytes. This is typically a fraction of what a large `.png` file might take up. My icons typically take less than 1 KB, but these camera vectors are more like 2.5 KB each.
- **It is sharp:** lines and shapes scale infinitely, never losing sharpness.
- **It is robust:** it works even without specialized software – its source can be edited in a text editor. It is implemented in XML, so the source can be viewed and edited very easily. Browser support for it is pretty good as well.
- **It is flexible:** it can be served as a background image with CSS, in an HTML `<img>` tag, or even inline as an `<svg>` element (which can be styled and animated with CSS and JavaScript).

I use SVG for all of the graphics on this site, with all three of these methods depending on performance and semantic context.
