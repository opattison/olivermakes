---
title: 'About'
layout: micro
option:
  - hero
date: 2014-10-31 18:25
updated: 2016-08-15 14:54
unique_id: about
permalink: /about/
custom_style: custom-hire.css
description: 'A short biography of Oliver Pattison, as well as details about how this website was made.'
details:
  - title: HTML and CSS
    expanded: 'I have a passion for well-written, thoughtful HTML and CSS. Although it is sometimes dismissed as a simple markup language, getting HTML right is challenging, both when dealing with visual design and with accessibility and usability.'
    icon: html5
  - title: Jekyll
    expanded: '[Jekyll](http://jekyllrb.com/) is my favorite tool for designing and publishing content on the web. Most of the sites that I build currently are static sites (using Jekyll) with minimal but flexible configuration and high performance.'
    icon: jekyll
  - title: Git
    expanded: 'Version control is essential for designing dynamically, maintaining code, and collaborating quickly and remotely. I use [Git](https://git-scm.com/) as a safety net for all of my work, whether on my own or with a team.'
    icon: git
  - title: JavaScript
    expanded: 'I have been learning JavaScript for the past few years, developing interactive user interfaces with tools like [Velocity.js](http://velocityjs.org/), [Vue.js](http://vuejs.org/) and [Mapbox](https://www.mapbox.com). I believe strongly in [progressive enhancement](https://sixtwothree.org/posts/designing-experience-layers) when designing experience layers.'
    icon: javascript
  - title: Sass/SCSS
    expanded: 'I use [SCSS](http://sass-lang.com/) to help me write effective CSS. I find it invaluable as a creative tool and as a way to organize and develop styles in short and composable parts.'
    icon: sass
  - title: Web publishing systems
    expanded: 'I have designed and developed sites with Shopify, Statamic, WordPress, and other content management systems. My focus has been on integrating front-end design with content editing systems, and creating clear and usable content structures for editors.'
    icon: shopify
image:
  - src: 2016-10-18-oliver-jeancflanagan-ccbync.jpg
    alt: 'Oliver Pattison standing in a forest with a backdrop of branches and yellow leaves'
    caption: 'Photo of me by [Jean Flanagan](https://jeancflanagan.com), [CC BY-NC](http://creativecommons.org/licenses/by-nc/4.0/)'
    date: 2016-10-18
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/2.8'
    shutter: '1/320'
    iso: 200
    latitude: 44.6399
    longitude: -72.8117
  - src: 2016-10-18-oliver-sapphie-jeancflanagan-ccbync.jpg
    alt: 'Oliver Pattison standing in a forest with Sapphie, the dog'
    date: 2016-10-18
    camera: 'Fujifilm X-E2'
    lens: 'Fujinon XF35mmF1.4 R'
    focal: '35mm'
    aperture: 'f/2.8'
    shutter: '1/210'
    iso: 200
    latitude: 44.6399
    longitude: -72.8117

---

I’m Oliver Pattison, a designer focused on the future of the web.
{:.focus}

I’m interested in [archiving](/labels/archiving/), [usable and universal design](/labels/design/), [typography](/labels/typography/), and [photography](/photography/). I’m also into music, hiking with [my hound dog](/2014/11/sapphie/), and working for progressive causes.

I’m currently working on independent projects, but I am also interested in the right full-time role – it might be called “web designer” or “web developer” but I am happiest working between those boundaries.

## What I work with

{% include block/details--hire.html %}

{% include block/outreach--hire.html %}

---

## About this site

This website is an archive for my work, featuring:

- **[Writing](/writing/)**, a collection of quick notes as well as longer essays
- **[Projects](/projects/)**, documentation and reflections on professional and open source work
- **[Photography](/photography/)**, a collection of images documenting details of my environment

Subscribe to **[this site’s Atom feed]({{ site.link.subscribe.full }})**. Or subscribe to filtered feeds for my [writing]({{ site.link.subscribe.writing }}), [photography]({{ site.link.subscribe.photography }}), and [projects]({{ site.link.subscribe.projects }}).

### Design and development

I designed [this site](/2014/12/oliver-pattison/) in the space of a few weeks in October and November 2014. Development continues regularly.

Early in the process, I established a [pattern page](/patterns/) with reference examples of general HTML and specific use cases for my own designs. The site is built with [Jekyll](http://jekyllrb.com), hosted with [Amazon CloudFront and S3](https://aws.amazon.com/cloudfront/), and version-controlled with [GitHub](https://github.com/opattison/olivermakes).

I would like to thank [Jean]({{ site.link.jean }}) for editing and design input.

### Typography

The fonts on the site (300, 400 and 500 weights of [the Ratio typeface](http://cargocollective.com/pstype/Ratio) are [hosted by Typekit](https://typekit.com/colophons/hro5wuc). The 400 weight of Menlo (or Consolas or the default monospace as a fallback) is used for code samples.

### How this site is designed

{% include block/project--satellite.html id="2014-12-02:oliver-pattison" %}

{% include block/project--satellite--patterns.html %}

{% capture endnote %}
## License and copyright

In short: the code and design are under [copyright (MIT license)](/license/#code) and original photos, images are [{{ site.license.long }} ({{ site.license.short }})]({{ site.link.attribution }}){:rel="license"}.
<a class="action" href="/license/">more on attribution</a>
{% endcapture %}

{% include block/ancillary--endnotes.html %}

---

## Elsewhere on the web

{% include block/elsewhere.html %}

---

{% assign image = page.image[1] %}
{% include block/image-srcset.html class="image--wide" %}
