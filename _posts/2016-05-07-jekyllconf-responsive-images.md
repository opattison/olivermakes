---
title: 'JekyllConf: Responsive images with Jekyll'
layout: edgeless
category: 'projects'
option:
  - minor
  - featured-home
tags:
  - 'jekyll'
  - 'responsive'
  - 'web'
updated: 2016-05-07 16:13
drafted: 2016-05-07 13:34
unique_id: 2016-05-07:jekyllconf-responsive-images
description: 'Video and notes on my talk: how to implement responsive images with imgix.'
project:
  source: https://github.com/opattison/demo-jekyll-imgix
image_index: /images/2016-03-16-jekyll-test-tube.svg
thanks: |+
  I was happy to be invited to speak at [JekyllConf 2016](http://jekyllconf.com). Thanks [CloudCannon](http://cloudcannon.com) for hosting it.
image:
  - src: /images/2016-03-16-jekyll-test-tube.svg
    alt: 'The Jekyll test tube logo'

---

These are accompanying notes from a pre-recorded Jekyll lightning talk. Video coming soon.
{:.focus}

Static websites built with tools like Jekyll are fast by their nature. With quickly served static assets (like HTML documents, scripts, images, and stylesheets) there is not much overhead in hosting a static site.

Images are often the heaviest resources on static sites and are a great place to start when improving front-end performance. According to the HTTP Archive, **63.5%** of the average page’s weight was made up of images ([as of April 2016](http://httparchive.org/interesting.php)). With `srcset` (and `sizes`), we can use the new [responsive images](https://responsiveimages.org) web standard to serve appropriate image sizes for each client.

`srcset` syntax is necessarily verbose, so I use a Liquid include that pulls site-wide data and page data to generate a loop for each image.

Here are some snippets of code used in the demo. To see it in even more detail, check out the [demo repository on GitHub](https://github.com/opattison/demo-jekyll-imgix).

### Site-wide variables and imgix configuration

{% capture code %}
```yaml
sizes: '(min-width: 70em) 1000px, (min-width: 50em) 750px, (min-width: 31.5em) 500px, 100vw'

srcset:
  - 500
  - 750
  - 1000

## Gems configuration
gems:
  - jekyll/imgix

## Imgix configuration
imgix:
  source: demo-jekyll-imgix.imgix.net
```
{% endcapture %}

{% capture caption %}
This `_config.yml` file includes a string for the `sizes` attribute, a sequence of `srcset` values, and imgix configuration values.
{% endcapture %}

<figure class="code">
{{ code | markdownify }}
{% include block/figcaption--text.html %}
</figure>

---

The following examples show a sample Jekyll page or post which pull in site-wide variables to build those complex image blocks.

### YAML frontmatter for the page

```yaml
---
title: 'Example: `srcset` plus imgix'
image:
  - src: /images/example-1.jpg
    alt: 'Leaves and a blue sky.'
    quality: 70
---
```

### Liquid include on the page

```liquid
{% raw %}
{% assign image = page.image[0] %}
{% include srcset-with-imgix.html %}
{% endraw %}
```

---

### Included HTML used by the page

{% capture code %}
```html
{% raw %}
<!-- srcset with imgix enabled -->
<!-- `image` variable assigned from front matter -->
{% if image.quality %}
  {% assign quality = image.quality %}
{% else %}
  {% assign quality = 50 %}
{% endif %}

<img
  src="{{ image.src | imgix_url: w: 500, q: 50 }}"
  sizes="{{ site.sizes }}"
  srcset="{% for width in site.srcset %}{{ image.src | imgix_url: w: width, q: quality }} {{ width }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
  alt="{{ image.alt }}">
{% endraw %}
```
{% endcapture %}

{% capture caption %}
This section uses the [imgix](https://github.com/imgix/jekyll-imgix) plugin for Jekyll to process images.
{% endcapture %}

<figure class="code">
{{ code | markdownify }}
{% include block/figcaption--text.html %}
</figure>


{% capture endnote %}
## Useful resources

- A foundational piece by Eric Portis on [implementing responsive images](https://ericportis.com/posts/2014/srcset-sizes/)
- [Responsive Images 101 series](http://blog.cloudfour.com/responsive-images-101-definitions/) by Jason Grigsby (Cloud Four)
- [imgix, the real-time image processing service](http://imgix.com/)
- [jekyll-imgix plugin](https://github.com/imgix/jekyll-imgix)
- [This Jekyll site](https://github.com/opattison/olivermakes/) (which uses responsive images made faster with imgix) – [check out my photography posts](/photography) for examples of `srcset` and imgix in use
{% endcapture %}

<aside class="ancillary--endnotes">
{{ endnote | markdownify }}
</aside>
