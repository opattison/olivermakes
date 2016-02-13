---
title: 'Pine Orchard Prints typographic identity'
layout: edgeless
option:
  - minor
  - no-imgix-source
category: 'projects'
tags:
  - 'design'
  - 'typography'
  - 'web'
date: 2015-10-24 9:00
updated: 2016-02-09 01:01
drafted: 2016-01-26 23:22
unique_id: 2015-10-24:pine-orchard-typography
description: 'Logotype and typography for a small online retail shop.'
project:
  url: https://pineorchardprints.com
  download: /resources/fragments/2016-01-15-logo-type.svg
  filetype: '.svg'
  license: '© copyright'
  license-url: https://github.com/opattison/pine-orchard-antique-prints#credits
image_index: /images/2016-01-15-logotype-pine-orchard--green.svg
image:
  - src: /images/2016-01-15-logotype-pine-orchard--green.svg
    src_png: /images/2016-01-15-logotype-pine-orchard--green.png
    alt: 'Pine Orchard Antique Prints logo type'
    date: 2016-01-26
    description: 'background #bdc6c0, foreground text #182905 – background was generated for this context, since the original logo is typically superimposed on an image background.'
  - src: /images/2016-01-28-costume-of-china.jpg
    alt: 'All caps text for a title page'
    date: 2016-01-28
    caption: '[William Alexander](http://pineorchardprints.com/collections/alexander-costume-of-china), <i>Costume of China</i>, 1814'
  - src: /images/2016-01-28-ausable-typography.jpg
    alt: 'Serif text description for a print'
    date: 2016-01-28
    caption: '[William Pate](http://pineorchardprints.com/collections/american-landscape), <i>American Landscape</i>, 1869'
  - src: /images/2016-01-27-pine-orchard-close.png
    alt: 'Close view of the letter forms for Pine in the logo.'
    date: 2016-01-27
  - src: /images/2016-01-28-print-collections.png
    alt: 'A list of collections using Cardo with small caps'
    date: 2016-01-28
  - src: /images/2016-01-28-print-index-title.jpg
    alt: 'The title text in Cardo for a print'
    date: 2016-01-28
  - src: /images/2016-01-27-pine-orchard-banner.jpg
    alt: 'Pine Orchard Antique Prints banner logo as a part of the banner on the shop'
    date: 2016-01-27
    caption: 'The typography in context on the [Pine Orchard Prints website](http://pineorchardprints.com).'

---

[Pine Orchard Antique Prints](https://pineorchardprints.com) is an online-only print shop that I designed and developed for a client.
{:.focus}

Typography set the tone for my design work on the Pine Orchard Antique Prints shop. I established the typography early in the design of the website, to strongly differentiate the shop with distinguished heading styles implemented with restraint. For the identity I drew inspiration from the descriptive text that accompanies these nineteenth century prints.

## Inspiration

I avoided the more eclectic Victorian typographic styles which might be illegible on this particular website. For the same reason, I eschewed excessive contrast, outlined text, centered layouts, and overly decorative typefaces. Reviewing text samples in books and prints from the shop’s catalog, I found these styles could be emulated and adapted for use.

<div class="grid">
  <figure class="grid-figure">
    {% assign count = 1 %}
    {% assign quality = 60 %}
    {% include block/srcset_grid2.html %}
    <figcaption>{{ page.image[1].caption | markdownify }}</figcaption>
  </figure>
  <figure class="grid-figure">
    {% assign count = 2 %}
    {% assign quality = 70 %}
    {% include block/srcset_grid2.html %}
    <figcaption>{{ page.image[2].caption | markdownify }}</figcaption>
  </figure>
</div>

I sought a typeface that could serve equally well in a display or body context. It would have to be a distinctive serif font – traditional but still able to sit comfortably next to modern user interface typefaces (such as Avenir or Roboto). To maintain a higher level of performance for the site, I limited my design to only one regular weight and one style. A single font additionally served as an artificial but useful constraint. This constraint led to creatively addressing emphasized forms: small capitals could mitigate the lack of bold or italic styles and more effectively evoke the type of that era.

## Choosing Cardo

I chose [Cardo](http://scholarsfonts.net/cardofnt.html), an old-style font by David Perry based on the Renaissance-era [Bembo](https://en.wikipedia.org/wiki/Bembo). It helped that the typeface was freely distributed through an open source license. I could try it out extensively in development before committing. [^1]

The typeface performed quite well, even with only a single weight. Cardo has excellent OpenType support and beautiful small capital styles, making headings and featured text stand out against the striking photos of the prints. I ended up using Cardo for all of the headings on the site, as well as for stylized collection links and for the logo identity. Using small capitals for titles, and ultimately for the logotype ended up being a stylistic success.

<figure class="image--narrow screenshot">
  <img src="{{ page.image[3].src | imgix_url }}" alt="{{ page.image[3].alt }}" />
</figure>

In my earliest take on the design, I attempted a logo designed only with CSS, but limited control over letter spacing and relative proportions led to unimpressive initial efforts. It is still difficult to implement small caps with OpenType and CSS properly, since browser support is not as extensive as it could be. [^2] I designed the next takes of the logotype with Adobe Illustrator, because I wanted SVG output and fine control over kerning. The final iteration appears on the site header as well as in transactional email messages and mailing labels.

{% capture more %}
Read more about [the rest of the work that went into the Pine Orchard Prints project]({% post_url 2016-01-29-pine-orchard-site %}).

Visit the [Pine Orchard Prints website](https://pineorchardprints.com) to see the typography up close.
{% endcapture %}

<aside class="ancillary">
{{ more | markdownify }}
</aside>

For a small shop, memorable and appropriate typography effectively served the business goals and provided a strong identity. Using a straightforward logotype supported the typographic style of the site and evoked the visual appeal of the items in the shop, without relying on symbols or iconography.

<div class="grid--wide">
  <figure class="grid-figure screenshot">
    {% assign count = 4 %}
    {% include block/srcset_grid2--png.html %}
  </figure>
  <figure class="grid-figure screenshot">
    {% assign count = 5 %}
    {% assign quality = 70 %}
    {% include block/srcset_grid2.html %}
  </figure>
</div>

<figure class="image--wide screenshot">
  {% assign count = 6 %}
  {% assign quality = 70 %}
  {% include block/srcset.html %}
  <figcaption>{{ page.image[6].caption | markdownify }}</figcaption>
</figure>


[^1]: Cardo is available for free through Google Fonts, but I chose to serve it through an Adobe TypeKit subscription because of their superior OpenType support.
[^2]: Even Safari 9.0 for OS X and iOS does not have support for it at the time of this writing, but 9.1 will! Following the principle of progressive enhancement and not relying too heavily on the small caps style meant that I could get away without optimizing for Safari in this case. The logotype, however, uses SVG outlines to ensure that it renders consistently across browsers.
