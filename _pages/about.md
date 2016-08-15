---
title: 'About'
layout: singel
option:
  - no-title
  - hero
  - code
date: 2014-10-31 18:25
updated: 2016-08-15 14:54
unique_id: 2014-10-31:about
permalink: /about/
description: 'A short biography of Oliver Pattison, as well as details about how this website was made.'
image:
  - src: /images/2011-11-10-oliver-bench-jeancflanagan-ccbync.jpg
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

I am <span class="p-name">Oliver Pattison</span>, a designer focused on the future of the web. My main interests are archiving, usable and universal design, typography, and photography. I like to work on [open source projects]({{ site.link.github }}){:rel="me"}, and I am open to collaboration and work opportunities. Have any questions for me? [Send me an email](mailto:{{ site.author.email }}){:.u-email rel="me"}.

I currently live in Washington, DC. I am originally from New York City.

I’m available for hire and interested in collaborating on projects.
{:.focus}

{% include block/outreach--hire.html %}

<aside class="ancillary">
<h1>Elsewhere on the web</h1>

  <section class="elsewhere--rows">
    <a class="elsewhere-action" href="{{ site.link.pinboard }}">Pinboard{% include icon/pinboard.svg %}</a>
    <a class="elsewhere-action" href="{{ site.link.github }}">GitHub{% include icon/github.svg %}</a>
    <a class="elsewhere-action" href="{{ site.link.codepen }}">CodePen{% include icon/codepen.svg %}</a>
    <a class="elsewhere-action" href="{{ site.link.twitter }}">Twitter{% include icon/twitter.svg %}</a>
  </section>

</aside>

## About this site

This website is an archive for my work, featuring:

- **[Writing](/writing/)**, a collection of quick notes as well as longer essays
- **[Projects](/projects/)**, documentation and reflections on professional and open source work
- **[Photography](/photography/)**, a collection of images documenting details of my environment

**[Subscribe]({{ site.link.subscribe.full }})** to this site’s Atom feed. Or subscribe to filtered feeds for my [writing]({{ site.link.subscribe.writing }}), [photography]({{ site.link.subscribe.photography }}), and [projects]({{ site.link.subscribe.projects }}).

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
# License and copyright

In short: the code and design are under [copyright (MIT license)](/license/#code) and original photos, images are [{{ site.license.long }} ({{ site.license.short }})]({{ site.link.attribution }}){:rel="license"}.
{% endcapture %}

<aside class="ancillary--endnotes">
{{ endnote | markdownify }}
<a class="action" href="/license/">more on attribution</a>
</aside>
