---
title: 'Designing this site: an accounting of dependencies'
layout: singel
category: 'writing'
tags:
  - 'design'
  - 'indieweb'
  - 'jekyll'
  - 'process'
  - 'typography'
  - 'web'
updated: 2016-04-11 11:08
drafted: 2014-11-07 12:34
unique_id: 2014-11-08:design-notes-dependencies
description: 'What runs this site? What is most essential and what could affect its long-term survivability?'
image_index: /images/2014-12-12-logo.svg
image:
  - src: /images/2014-12-12-logo.svg
    src_png: /images/2014-12-12-logo.png
    description: 'index-image color is gray6 #84919a and grayblue #bdcfdb'

---

What is involved in making this site work, at minimum? What additional dependencies are worth introducing, and how do these dependencies affect the long-term survivability of the site and its implementation?

## A browser, a text editor, a command line

I really only need a browser, a text editor, and a command line to maintain the website. I can write HTML and CSS, design and test in a browser (Chrome primarily, but also Safari, Firefox, Internet Explorer, and some mobile browsers), control [the version history]({{ site.source_url.repo }}) with Git, and build the site and deploy to a server with Terminal (running Ruby and JavaScript dependencies).

## Leasing the domain/URI

It is unfortunate that the domain system has built-in impermanence that even the best planning cannot work around. Since domain names are leased and not purchased, all other future-proofing schemes could be let down by something as common as an expired credit card or a lost email. I have the date reminder set for 2017 when that next rolls around for me, but it is striking how fragile this is compared to all of the other parts of this system that can more easily be mitigated or replaced. I wonder how long into the future we will have to wait for a more permanent addressing for the web, if it will ever come.

## Photo editing and processing

Adobe Lightroom is essential for editing photos and managing a large photo library, which is part of the website. Adobe Photoshop is not necessary for editing them, but I do optimize images and export images at multiple sizes for responsive images. For vector graphics, I use Adobe Illustrator. While I integrate these tightly into my process for making the website, there *are* alternatives to them, and not having access to them would not prevent me from maintaining the site as it exists now.

## Fonts

Besides the domain, this is one of the few parts of the site that I have to continue paying for on a subscription basis to keep the site running as designed. TypeKit has an [extensive library of fonts](https://typekit.com/fonts), and I am quite happy with the fonts that I selected. While my site would not break without these fonts, I've still chosen to make hosted web fonts – that I don’t own – an integral part of the current version of the site. My current solution for typography functions as a “rental”.

However, if I had to break free from Adobe Creative Cloud or TypeKit as dependencies, I could [buy Ratio](http://cargocollective.com/pstype/Ratio) and host it myself. The cost is not prohibitive since TypeKit already costs me a comparable amount. I use [Source Code Pro](http://adobe-fonts.github.io/source-code-pro/) for monospace fonts, also hosted by Typekit, but that font is available for free, and therefore does not present any challenges.

{% capture endnote %}
# Update 2016-04-11

The overall picture has not changed significantly in the past year and a half, but here is what has changed:

- I no longer use the font Source Code Pro. Instead the site uses system monospace fonts, for better performance.
- I use [Sketch](http://sketchapp.com/) more than Illustrator now.
- I used to optimize photos with local software (Photoshop and [image_optim](https://github.com/toy/image_optim)) but I now use [imgix](https://www.imgix.com), a server-based optimization service.
- [npm](https://www.npmjs.com/) and [Travis CI](https://travis-ci.org/) are now more significant dependencies for building and deploying the website.
{% endcapture %}

<aside class="ancillary--endnotes">
{{ endnote | markdownify }}
</aside>
