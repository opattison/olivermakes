---
title: 'About'
layout: singel
option:
  - no-title
  - hero
  - code
  - code-block
  - srcset
category: meta
date: 2014-10-31 18:25
updated: 2015-08-31 05:48
description: 'A short biography of Oliver Pattison, as well as details about how this website was made.'
image:
  - src: 2011-11-10-oliver-bench-jeancflanagan-ccbync.jpg
    alt: 'Oliver Pattison sitting on a bench'
    caption: 'Photo of me by [Jean Flanagan](http://jeancflanagan.com), [CC BY-NC](http://creativecommons.org/licenses/by-nc/4.0/)'
    date: 2011-11-10
    camera: 'Nikon D3000'
    lens: 'Nikon DX 55-200 mm f/4.0-5.6'
    focal: '55mm'
    aperture: 'f/4.0'
    shutter: '1/40'
    iso: 200

---

I am <span class="p-name">Oliver Pattison</span>, a designer focused on the future of the web. My main interests are archiving, usable and universal design, mobile technology, and photography.

I currently live in Washington, DC. I am originally from New York City.

I’m employed full-time but still available to work on small projects. [Get in touch](mailto:{{ site.author.email }}){:.u-email rel="me"} by email if you have a project in mind.
{:.focus}

## About this site

This website is an archive for my work, featuring:

- **[Writing](/writing/)**, a collection of quick notes as well as longer essays
- **[Photography](/photography/)**, a collection of images documenting details of my environment
- **[Projects](/projects/)**, documentation and reflections on professional and open source work

**[Subscribe]({{ site.link.subscribe.full }})** to this site’s Atom feed. Or subscribe to filtered feeds for my [writing]({{ site.link.subscribe.writing }}), [photography]({{ site.link.subscribe.photography }}), and [projects]({{ site.link.subscribe.projects }}).

{% capture influences %}
# Influences

These people and their creative works inspired elements of the site – in particular its typography, proportion, and design process.

## People

- [Jeremy Keith](https://adactio.com)
- [Mandy Brown](http://aworkinglibrary.com)
- [Paul Robert Lloyd](http://paulrobertlloyd.com)
- [Anna Debenham](http://maban.co.uk)
- [Heydon Pickering](http://www.heydonworks.com)
- [Simon Foster](http://simonfosterdesign.com)
- [David Bushell](http://dbushell.com)
- [Trent Walton](http://trentwalton.com)

## Websites and apps

- [Art=Work](http://artequalswork.com) by Nathan Ford
- [Works That Work](https://worksthatwork.com)
- [Code for America Style Guide](http://style.codeforamerica.org)
- [CSS Zen Garden #221](http://www.csszengarden.com/221/) by Andrew Lohman
- [Jim Ramsden](http://jimramsden.com)
- [Ableton](https://www.ableton.com/en)
- [STET by Editorially](http://stet.editorially.com)
- [MapBox](https://www.mapbox.com)
- [VSCO](http://vsco.co)
- [Instapaper](https://www.instapaper.com)
- [Reeder](http://reederapp.com)
{% endcapture %}

<aside class="ancillary">
{{ influences | markdownify }}
</aside>

### Principles

- Future-friendly
- Content-first
- Responsive
- High performance
- Minimalist aesthetics
- Progressive enhancement
- Respect for users and their devices
- Empathy in content, design and tone

### Design and development

I designed this site solo in the space of a few weeks in October and November 2014.

Early in the process, I established a **[pattern page](/patterns)** with reference examples of general HTML and specific use cases for my own designs. I plan to expand it and turn it into a pattern library and style guide for the site.

I would like to thank [Jean]({{ site.link.jean }}) for editing and design input.

### Typography

The fonts on the site (300, 400 and 500 weights of [the Ratio typeface](http://cargocollective.com/pstype/Ratio) and 400 weight of [Source Code Pro](http://adobe-fonts.github.io/source-code-pro/)) are [hosted by Typekit](https://typekit.com/colophons/ojm0eig). This site uses responsive typography based on pixel density, so if you have a higher resolution display, you will see different variants of Ratio. Only pages that include monospaced fonts conditionally incur a request for Source Code Pro.

### Under the hood

- **[Jekyll](http://jekyllrb.com)** for building.
- **[Amazon S3](http://aws.amazon.com/s3)** for hosting.
- **[s3_website](https://github.com/laurilehmijoki/s3_website)** for deploying.
- **[GitHub](https://github.com/opattison/olivermakes)** for version control.

## Copyright

All writing and photography on the site is my original work and is licensed under [Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC)]({{ site.link.attribution }}){:rel="license"}. All design and code is under conventional copyright (as opposed to CC-style “copyleft” copyright), but is available for fair use [on GitHub]({{ site.link.source }}){:rel="source"}. If you are looking at the repository, almost everything in the `_static` and `_posts` folders is CC BY-NC and the most of the rest of it is under copyright, where applicable.

I designed the site myself, so most of the source was written by me by hand. Exceptions where I derived inspiration or an approach from another source are noted inline. An example of copyright violation would be copying all of the source code outright and using it to make a public website that could be confused for this one.

### Attribution

Proper CC BY-NC attribution with a link and credit would look like: **“The title” [Oliver Pattison]({{ site.url }}) [CC BY-NC]({{ site.link.attribution }})** or:

```html
“The title” <a href="{{ site.url }}">Oliver Pattison</a> <a href="{{ site.link.attribution }}">CC BY-NC</a>
```

If you have any questions about licensing or use of content from the site, please [contact me by email](mailto:{{ site.author.email }}).

- - -

## Elsewhere on the web

Nearly every significant thing I read or look at is archived on **[Pinboard]({{ site.link.pinboard }}){:rel="me"}**. It is my external brain and my favorite thing on the web. It is as complete an archive as I can keep of my reading online.

I am **[@olivermakes on Twitter]({{ site.link.twitter }}){:rel="me"}**.

My open source code (including this site) is on **[GitHub]({{ site.link.github }}){:rel="me"}**.

Some of my design experiments are posted on **[CodePen](http://codepen.io/opattison/){:rel="me"}**.

A selection of my mobile photography is on **[VSCO Grid]({{ site.link.vsco }}){:rel="me"}**.

I post less frequently to:

- [Tumblr]({{ site.link.tumblr }}){:rel="me"}
- [Google+]({{ site.link.googleplus }}){:rel="me"}
- [Panoramio]({{ site.link.panoramio }}){:rel="me"}
- [Flickr]({{ site.link.flickr }}){:rel="me"}
