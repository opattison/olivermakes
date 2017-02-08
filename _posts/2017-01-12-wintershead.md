---
title: 'Wintershead Brewing Company'
layout: edgeless
theme: dark
category: 'projects'
option:
  - featured-home
  - map
  - mapbox
  - minor
tags:
  - design
  - typography
  - web
updated: 2017-01-19 14:35
drafted: 2017-01-01 12:34
period: 2016-11 to 2017-01
unique_id: 2016-01-12:wintershead
description: 'A fictional design project to demonstrate fluid responsive typography.'
project:
  url: https://wintershead.olivermak.es
image_index: 2016-12-15-logo-emboss-baltic.svg
image:
  - src: 2016-12-15-logo-emboss-baltic.svg
    src_png: 2016-12-15-logo-emboss-baltic.png
    alt: 'Wintershead Brewing Company embossed logo'
  - src: 2016-12-30-wintershead-logotype.png
    alt: 'Wintershead Brewing Company'
    caption: 'The logotype and mark for the site, set in Enzo.'
  - src: 2016-12-30-moel.png
    alt: 'moel logo and illustration'
  - src: 2017-01-03-lonn-path.png
    alt: 'letter forms meet vector paths'
    caption: 'The path of the branch meets the letters of the name for [the beer “lönn”](https://wintershead.olivermak.es/products/lonn/).'
  - src: 2017-01-03-yark-theme.jpg
    alt: 'screenshot: monochrome blue tinted photographs on a blue background'
    caption: 'Themes are applied dynamically to each post’s featured photos using [imgix](https://www.imgix.com) image processing. That is: the photo editing takes place automatically on a remote server using the imgix API – not done manually beforehand in a photo editor like Photoshop.'
  - src: 2017-01-03-map.png
    alt: 'screenshot of locator map'
    caption: 'Using [Mapbox Studio](https://www.mapbox.com/mapbox-studio/), I designed a custom map style to [simulate a product locator](https://wintershead.olivermak.es/about/#location).'
---

I designed the Wintershead site as a [fictional brewery](https://wintershead.olivermak.es/fiction/) to explore and showcase possibilities and design concepts for small-scale web projects. Wintershead Brewing Company was invented as an example of a small New England-based company. Though not all small organizations would resemble Wintershead, there is a story to tell, a product to sell, and an identity to be illustrated through pictures and words, just like any real website promoting a product, service, or idea.

## A coherent story

I built a small collection of objects that would appear coherent at a glance, suggesting their place of origin and giving them substance and form. Names, places, and objects featured in this design were partly inspired by visiting Vermont and partly by the landscape glossaries from the British Isles in <a href="http://www.penguinrandomhouse.com/books/536563/landmarks-by-robert-macfarlane/9780241967874/"><i>Landmarks</i> by Robert Macfarlane</a>.

## Artisan visual design

A design should match its context. What might a design for a small business or organization look like? How could this project speak like a small operation while standing on its own, apart from mass-produced design? Taking on [Norman Potter’s idea of “artisan” design](https://hyphenpress.co.uk/products/books/978-0-907259-16-9), this project is a bold statement on what hand-crafted design can be.

Like the organization itself, the design should be straightforward, personable, independent-minded, and most importantly have a voice and tone that echoes its source. My approach was to push the limits of proportion and contrast, using strong colors and dramatic typography.

{% assign image = page.image[1] %}
{% include block/image.html class="image--wide screenshot" %}

An essential element of any design for the web is type. Digital typesetting is about more than merely selecting a typeface, but rather involves determining tone, proportion, weight, clarity, and accessibility. I chose [FF Enzo](https://www.fontfont.com/fonts/enzo) as a modern sans serif for a modern brand, something that performs exceptionally well at massive scales but still serves as legible body text. To some degree the visual aesthetic of this project is inspired by Scandinavian minimalism, which makes the Swedish-designed Enzo a sure fit.

I shaped and refined spare vector illustrations to create identities that evoke the ideas behind these hypothetical products. The light lines match the subtle curves of Enzo’s thin weight, with the leading edge of the letterform bleeding into the contours of the illustrations. In applications where the illustration stands alone, the contiguous logotype for the product is omitted. Though drawn loosely, these could be the basis for physical product design, such as a printed label.

{% assign image = page.image[2] %}
{% include block/image.html class="image--wide screenshot" %}

{% assign image = page.image[3] %}
{% include block/image.html class="image--wide screenshot" %}

{% assign image = page.image[4] %}
{% include block/image.html class="image--wide screenshot" %}

{% assign image = page.image[5] %}
{% include block/image.html class="image--wide screenshot" %}

Examples of the implementation of the visual design are demonstrated in the [pattern library for the project](https://wintershead.olivermak.es/patterns/).

## Fluid responsive layout

Recently I have been experimenting with fluid typography as a basis for proportion and type. The goal is to have type and dimensions that work regardless of device size. Unlike conventional breakpoint-based responsive design, this approach uses a ratio of font size to screen width so that the scale of the site is fluidly responsive.

Advantages to this method include a more consistent visual design, a guarantee of legible typography at all screen sizes with fewer rules, and a far less complicated implementation. Working this way involves setting up a system of initial constraints and working forward from that point rather than starting with a desired visual result and working backward, which allows for a less bounded and more flexible design process.

## High performance design

On average, websites are [getting more bloated consistently over time](http://idlewords.com/talks/website_obesity.htm). This bloat can be felt directly though slower loading times, since websites are getting larger more quickly than typical internet speeds are increasing. Mobile internet speeds also tend to be lower, and have higher latency and more variable quality (dependent on reception and network load), meaning that the web feels like a slower medium today than it did years ago. Much of this bloat is made up of images, but other common culprits are JavaScript resources, style sheets, and web fonts.

Part of the reason this site is so fast is that it is a static site generated with [Jekyll](https://olivermak.es/2016/03/consider-jekyll/). The exact same design would likely be perceptibly slower using a common content management platform such as WordPress or Squarespace. The reason for this is that the content of a website built with Jekyll can be served as static pre-generated HTML files.

A dynamic CMS (such as WordPress) deals with requests individually and builds the page when it is requested, which adds latency as well as a requirement that the web server can build pages dynamically with server-side scripting. Dynamically generating pages is a powerful feature and for some sites is essential, but it comes with a significantly more expensive and often slower server configuration requirement. Sidestepping this requirement by serving static HTML files instead (built ahead of time with Jekyll or another static site generator) is an [economical option](https://olivermak.es/2016/03/jekyll-cost/) that works well for many smaller projects.

{% capture blockquote %}
If you're only going to the corner store, ride a bicycle.
{% endcapture %}

{% include block/blockquote.html author="Maciej Cegłowski" source="“The Website Obesity Crisis”" source_url="http://idlewords.com/talks/website_obesity.htm" %}

Though the website is built with Jekyll, it could be easily implemented with another set of technologies, but a simple design often calls for the best performing and most economical solution. Static sites are a great choice for text-heavy sites – even image-accompanied text! For a site that relies on server-dependent interactive elements (like a shopping cart, for example), a dynamically generated site might be a more appropriate choice. In a sense, Jekyll or another static site generator isn’t a direct alternative to a dynamic site, but rather a radically different solution which could work depending on requirements.

I committed to a [performance budget](https://timkadlec.com/2013/01/setting-a-performance-budget/) of 300 kB for a typical page, which is [roughly one seventh](http://httparchive.org/trends.php) that of a typical website. Many pages weigh in at only 100 kB, which is remarkably lean. The only exception is the [map on the about page](https://winterhead.olivermak.es/about/#location) which pushes past 1 MB (1000 kB) because it features a Mapbox map (though the map element is out of the [critical path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/) so it does not slow down the initial page load). Modern websites are unbelievably bloated and I make sure that my projects are as lean as possible.

Other factors that contribute to fast loading pages:

- Use SVG where possible for images: infinitely scalable images with smaller file sizes (often many times smaller than using other image formats).
- Serve images and other resources using content delivery networks for lower latency and robust performance. In particular, I use [CloudFront](https://aws.amazon.com/cloudfront/) and [imgix](https://www.imgix.com).
- Avoid using too many web fonts: only four weights and styles are used for the typography of this site. At 25% to 75%, fonts make up the single largest of any given page’s weight for this site, far outweighing most other resources.
- Keep requests and page sizes down. A typical page has only 100 KB total weight and 10 HTTP requests.
