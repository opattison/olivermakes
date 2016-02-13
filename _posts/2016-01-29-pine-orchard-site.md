---
title: 'Pine Orchard Antique Prints'
layout: singel
option:
  - code
  - featured-home
category: 'projects'
tags:
  - 'design'
  - 'metadata'
  - 'typography'
  - 'web'
date: 2016-01-29 12:34
updated: 2016-02-09 21:27
drafted: 2016-02-03 16:22
unique_id: 2015-01-29:pine-orchard-site
description: 'Design and development for an online retail shop selling antique prints.'
period: 2015-05 to 2016-02
project:
  url: https://pineorchardprints.com
  source: https://github.com/opattison/pine-orchard-antique-prints
  license: '© copyright'
  license-url: https://github.com/opattison/pine-orchard-antique-prints#credits
image_index: /images/index/2016-01-27-pine-orchard-banner.jpg
image:
  - src: /images/2016-02-09-pine-orchard-banner.jpg
    alt: 'Pine Orchard Antique Prints banner logo as a part of the banner on the shop'
    date: 2016-01-27
    caption: 'The typography in context on the [Pine Orchard Prints website](https://pineorchardprints.com).'
  - src: /images/2016-02-09-pine-orchard-full-desktop.jpg
    alt: 'About page for the Pine Orchard Prints site'
    date: 2016-02-09
  - src: /images/2016-02-09-pine-orchard-purchase-1.jpg
    alt: 'Add to cart action on a product page'
    date: 2016-02-09
    caption: 'Responsive interaction flow from product page to cart.'
  - src: /images/2016-02-09-pine-orchard-purchase-2.jpg
    alt: 'Item added to cart, indicated after the action is taken'
    date: 2016-02-09
  - src: /images/2016-02-09-pine-orchard-purchase-3.jpg
    alt: 'Item within a cart'
    date: 2016-02-09
  - src: /images/2016-02-09-pine-orchard-tablet-collections.jpg
    alt: 'View of collections on a tablet screen, featuring images of a single print and sample items'
    date: 2016-02-09

---

Pine Orchard Prints is a family business: I worked directly with my own family to see it through from initial sketches to final implementation and support after launch. The business started years ago in upstate New York when my dad, [Keith Pattison](https://pineorchardprints.com/pages/about), assembled a collection of 19th century antique prints, selling some of them in a local shop and building an extensive catalog. Early in 2015 we talked about the possibility of selling part of the collection online, as a passion project for both of us. This project asked a lot from me: I was the sole designer, developer, copy editor, information architect, photo editor, and content strategist. Here is how it came together.

<figure class="image--narrow screenshot">
  {% assign count = 1 %}
  {% assign quality = 70 %}
  {% include block/srcset_narrow.html %}
</figure>

## Shopify and Timber

For a small-scale project that nevertheless would require uploading and maintaining a large number of unique items, the tools for managing the content and hosting the site had to be inexpensive and flexible. Shopify is a platform for getting a shop set up quickly for a low monthly cost. Shopify handles security and user data, and provides shop-owner customers with content management, inventory, and checkout systems. These built-in tools make running a small shop much more approachable for a small business, and they have done an impressive job creating a responsive and usable administrative interface.

Having built plenty of projects with [Jekyll](/labels/jekyll), I was excited to work with Shopify since both systems share the same Liquid template language. As a centrally managed shopping content management system, Shopify works quite differently from Jekyll, but the language underpinning them is identical.

### Working with a theme framework

For most of my [projects](/projects/) I typically build from the ground up, bringing in third-party tools rarely, if at all. For this project, I wanted a quick start and a chance to work in a different paradigm. I found [Timber](http://shopify.github.io/Timber/), a framework by Carson Shold, which is made for designers and developers who want to build themes for Shopify. The framework encouraged me to step slightly away from my comfortable set of tools for web development. I took the opportunity to try less familiar tools like jQuery, the rigid (but robust) [grid system](http://shopify.github.io/Timber/#grid), and a different idiom of [SCSS](http://sass-lang.com/). With Timber, the design process revolved around a working prototype – a shell of a shop that was nearly usable and functional out of the box. It was convenient to have examples of each page and interaction that would need to eventually be implemented, but Timber also provided a strong baseline for the design.

I stripped the theme framework of some elements that the site would not need. A text-only navigation interface would do instead of relying on an icon font (for better accessibility, legibility, and performance). I replaced the JavaScript-based shopping cart drawer interface with a purpose-built static cart, although I did retain and repurpose some of the dynamic features built into the theme like auto-updating cart totals and visual confirmation that an item had been added to the cart. I used Timber’s included grid system extensively, but also expanded it, using CSS `flex` properties to create micro-layouts (in the navigation bar and the [shopping cart](https://pineorchardprints.com/cart)). Adopting a framework meant adopting the conventions of the design system provided for me – trying to work in a harmonious and complementary manner with the tools at hand, instead of attempting to discard and reinvent.

<div class="grid--wide">
  <figure class="grid-figure--33 grid-figure screenshot">
    <img
      src="{{ page.image[2].src | imgix_url: q: 70 }}"
      alt="{{ page.image[2].alt }}">
    <figcaption>{{ page.image[2].caption | markdownify }}</figcaption>
  </figure>
  <figure class="grid-figure--33 grid-figure screenshot">
    <img
      src="{{ page.image[3].src | imgix_url: q: 70 }}"
      alt="{{ page.image[3].alt }}">
  </figure>
  <figure class="grid-figure--33 grid-figure screenshot">
    <img
      src="{{ page.image[4].src | imgix_url: q: 70 }}"
      alt="{{ page.image[4].alt }}">
  </figure>
</div>

I’m not sure if I would use a theme framework again for building something like a Shopify site. However, working with Timber – a thoroughly designed and documented design system – taught me quite a bit about the possibilities of the platform. Timber’s minimal defaults, modular structure, and unopinionated patterns left far more room for growth and expansion than building on top of a pre-built theme would. It saved me time so I could focus on the content and design of the site.

## Typography

I sought a balance between two opposing styles, pairing an old-style serif with a modern, geometric sans-serif. The site’s headings and logo are set in Cardo. UI and body type are set in Avenir Next (or Roboto or Calibri or other fallbacks, depending on which fonts the user has installed). I kept the number of web fonts served down to only one single weight and style, decreasing the overall page weight, making for faster page loads.

I wrote more about the process for creating the visual identity for Pine Orchard Prints. Read more about [the typography of the site]({% post_url 2015-10-24-pine-orchard-typography %}).

{% include block/project--satellite.html id="2015-10-24:pine-orchard-typography" %}

## Content and data

We had a significant challenge for this small project: each item had to be cataloged, photographed, and written about – and there were *over 400 of them*. Each print or map is unique, and only some of them share metadata, meaning that a unique product item has to exist for each physical object for sale. Shopify’s database can handle this just fine, and hosting multiple photos for each item isn’t an issue, but much of Shopify’s UI is (understandably) built around shops that have far fewer unique items. It would also create an information architecture challenge: how would we sort, collect, and cross-link so many items?

### Identify everything

First we assigned unique identification (like **A0123**) to each item. A strong naming system became invaluable when it came time to take photos of every item. Not all prints had obvious markings or labels to tell them apart individually, so unique IDs made it possible to photograph them systematically. A handful of prints had the same name and metadata (with a different source or condition), making unique identifiers crucial. Later we added these IDs to Shopify’s SKU database field to make sure that each print had been added accurately and completely, without duplication or errors. I created a table with each of the items and uploaded the data in bulk so that products would not have to be added manually in the administrative interface. Creating a basis for an inventory system was an important step in organizing the content for the project, as well as providing an important data source for the business. Each item could be accounted for, and the content and design of the site could be built around the physical items for sale.

### Tagging

Early on we addressed the information architecture to determine how so many unique items might be organized. What were the attributes that the items had in common? Did we or our customers care about whether a print was a steel engraving, a lithograph, a wood engraving or hand-colored? How did these attributes overlap and were they ever mutually exclusive? What about the condition of the item, or the location of the subject, or the original artist, or the subject matter of the print? Ultimately we wanted to build **[collections](https://pineorchardprints.com/collections)** of items that would have thematic continuity and interest to shoppers.

After discovering the most important features to highlight, along with the information we had readily available about each print, we came up with a loose list of around 20 important tags which grew as the cataloging process continued. We eventually added dozens of supplementary tags, but the few we started with formed the core of the site’s structure: collections based on regions, key artists and publications, and subject matter.

<figure class="image--wide screenshot">
  {% assign count = 5 %}
  {% assign quality = 60 %}
  {% include block/srcset.html %}
</figure>

## Modern and antique

I was pleasantly surprised with how the project came together. Initially my goals were modest: set up a shop quickly and affordably. However, my whole family became invested in the project, closely editing and curating individual items and helping to iteratively design the site. I enjoyed the process of developing a visual design and tone that managed to evoke 19th century aesthetics in a distinctly modern online shop.
