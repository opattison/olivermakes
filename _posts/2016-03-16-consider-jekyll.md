---
title: 'Consider Jekyll'
layout: edgeless
option:
  - hero
category: 'writing'
tags:
  - 'jekyll'
  - 'publishing'
  - 'web'
updated: 2016-03-16 20:04
drafted: 2016-02-12 12:34
unique_id: 2016-03-16:consider-jekyll
description: 'A brief introduction to Jekyll and why I use it for my web projects.'
thanks: |+
  Thanks [Jean Flanagan](http://jeancflanagan.com) for editing assistance and giving this a title.

  Thanks [Michael Lee](https://michaelsoolee.com/) for technical feedback. [Read his response](https://michaelsoolee.com/consider-jekyll-oliver-pattison) to this essay.
image_index: /images/2016-03-16-jekyll-test-tube.svg
image:
  - src: /images/2016-03-16-jekyll-logo-reverse.svg
    src_png: /images/2016-03-16-jekyll-logo-reverse.png
    alt: 'Jekyll logo, script with a test tube'
  - src: /images/2016-03-16-jekyll-post.png
    alt: 'A post in the Jekyll site repository being edited.'
    caption: 'What Jekyll looks like in Atom, the text editor. This is a view of a Markdown post from the official Jekyll documentation site.'

---

## First, what is Jekyll?

**[Jekyll](http://jekyllrb.com)** is a tool that builds fast, simple, secure websites. It is an alternative to a conventional [content management system (CMS)](https://en.wikipedia.org/wiki/Web_content_management_system). The key difference between Jekyll and most CMS software is that Jekyll has *no database* and is made of *plain text* and HTML files. Fundamentally, it is a publishing system that generates HTML markup from plain text [Markdown](http://daringfireball.net/projects/markdown/) files. Those generated files are then uploaded to a web server. This sort of system is often called a **[static website generator](https://en.wikipedia.org/wiki/Static_web_page)**.

Just like a CMS (even though it is not one), Jekyll has a variety of tools and approaches for building complex and flexible layouts and design patterns. Jekyll uses [Liquid](http://liquidmarkup.org) as a templating language and [YAML](http://yaml.org) for configuration and data. Its simplicity does not preclude its use for larger websites. An active and helpful open source community have maintained it since [October 19, 2008](http://jekyllrb.com/docs/history/#v0-0-0).

It is free to use, and thousands of people and organizations rely on it to build their websites.

## Why I use Jekyll

I use Jekyll for many of my personal projects, including this website. With only a text editor and some other open source tools, I can get a website implemented and published quickly and easily. It isn’t the only tool for generating static sites, but it has worked well for me. It is the most efficient method I know for getting a website published quickly and affordably.

### Fast

Jekyll sites load fast. With no database calls or server-side scripting, there is far less overhead on the server compared to a dynamic site. [^1] Latency for serving static resources is minimal. A single HTML file can be served in a barely perceivable fraction of a second. For sites served dynamically, caching can close the performance gap, but Jekyll sites load quickly by default. It is comparatively easy to tune a Jekyll site for performance by optimizing the size of resources before deploying to a server.

{% capture ancillary %}
When I say “[dynamic](https://en.wikipedia.org/wiki/Dynamic_web_page)”, this is shorthand for a server-side program (using a language like PHP or Ruby) run on a web server that generates HTML files to be served on request. WordPress is an example of a CMS that can be installed on a server running PHP. This is opposed to “static” which implies HTML files served directly as HTML. Jekyll generates files that are served [statically](https://en.wikipedia.org/wiki/Static_web_page), directly from a server. Static merely describes how a site is built and served, but does not imply that a site has no dynamic features. A Jekyll site can run JavaScript on the client side (in a browser) to enable “dynamic” user interfaces or implement third party services like commenting systems or interactive maps.
{% endcapture %}

<aside class="ancillary">
{{ ancillary | markdownify }}
</aside>

Quicker response times and no processing power required to generate pages means that limited server resources can be stretched further. A server that would fail under heavy traffic would be able to keep serving static files reliably under the same conditions.

Dynamic sites can use content delivery networks to serve static content like images, scripts, and style sheets efficiently, offloading demand from the main server. An *entire* Jekyll site can be served over a CDN – every asset needed to serve the site can have high availability and optimal performance. [^2]

### Secure

With no server-side code, there are fewer vectors for attacking a static site. Static sites avoid the inherent vulnerabilities in running and maintaining content management systems, databases, and other server-side scripting, frameworks, and engines. No code runs on the server besides the HTTP server itself, so a static site can’t be directly compromised.

### Minimalist

Jekyll is what you make of it. Its minimal assumptions about what users intend to do with it means it can be used for any sort of website. It is absolutely a viable strategy to start with only HTML and CSS and afterward enhancing with template and metadata features. A site can start as an HTML prototype and be continuously refined and enhanced until it is a working production site. Jekyll’s simplicity is an opportunity.

{% assign image = page.image[1] %}
<figure class="image--wide">
  {% include block/image--imgix.html %}
  {% include block/figcaption--image.html %}
</figure>

Although Jekyll is built around a blog-friendly core, the template and metadata features in Jekyll can be used for content of all types. With so few assumptions about how it should be used, there is room to ignore core features and layer on functionality as needed.

Fewer parts to break makes Jekyll reliable. Even if one’s local configuration of Jekyll were to stop working properly, the files on the server remain untouched until they are updated again. Once a site is deployed, it will not fail unless the server does.

### Accessible

Learning Ruby or other programming languages is not necessary for using a Jekyll site. [^3] YAML and Liquid are great to work with, and HTML and CSS work exactly the same here as anywhere else. [Sass](http://sass-lang.com/) support is built-in. [The documentation](http://jekyllrb.com/docs/home/) is carefully written and up-to-date, and the community are quite supportive for newcomers. Its wide use ensures that plenty of common problems are already solved or documented.

Jekyll is not yet as approachable as it could be for everyone. However, it is possible to get started quickly if one is comfortable learning a bit of command line configuration and dealing with some initial complexity. Getting started typically requires installing or updating Ruby (and optionally [Git](https://git-scm.com/) for version control) and then installing Jekyll to begin a new project. Especially on Linux or OS X, this can be a very short configuration process.

Once the complexity of developing a static site fades into familiarity and comfort, one is left with a site that can be updated and managed with only text. Local development is straightforward. Plain text is far easier to back up and see changes to compared to a database. Having Markdown files for a site easily accessible and managed in Git version control has been invaluable for having control over my own work and understanding the open source work of others. Jekyll sites all look roughly the same on the inside, with folders of organized, plain text Markdown paired with Liquid templates, HTML, and CSS. Besides the plain text, the rest is an implementation detail. With Jekyll, the content comes first.

### Affordable

Hosting a static site is exceptionally affordable, with rates ranging from free to a few dollars per month. My website currently costs **[under $1.50]({% post_url 2016-03-17-jekyll-cost %})** per month to host. Dynamic sites are invariably more expensive to host.

<a class="action" href="{% post_url 2016-03-17-jekyll-cost %}">more on Jekyll’s cost</a>

## The right tool for the job

I don’t mean to suggest that static sites are always better than dynamic sites. I recommend using the appropriate tool for the job. Static sites excel for mostly text-based sites with only moderate needs for dynamically generated markup or content that is updated in real time. A surprising number of websites fit this description. I would argue that most sites running dynamic server-side code don’t *really* need it and are paying a price in complexity or performance compared to a similar static implementation.

But there are plenty of cases where a tool like Jekyll won’t be the most appropriate tool. Dynamic sites and web applications are more suitable for complicated sites where lots of data needs to be stored or returned, or when high levels of interactivity are required. A CMS in particular can also offer significant benefits to people administering and publishing content.

For most of the projects that I currently work on or plan to work on, static is the answer to designing and delivering high performance content for the web.

{% capture endnote %}
# Further reading

- [{static is} The New Dynamic, a collection of resources on the “post-CMS paradigm”](https://www.thenewdynamic.org/)
- [Jekyll: Where content is truly king by Ben Balter](http://ben.balter.com/2013/10/30/content-is-king/)
- [Jekyll Talk community forum](https://talk.jekyllrb.com)
- [Jekyll source on GitHub](https://github.com/jekyll/jekyll)
{% endcapture %}

<aside class="ancillary--endnotes">
{{ endnote | markdownify }}
<a class="action" href="/labels/jekyll/">my writing on Jekyll</a>
</aside>

[^1]: For some background on why rendering ahead of time is useful, read [Tom MacWright on “Thinking Static”](http://www.macwright.org/2013/01/08/thinking-static.html) which addresses some of the issues of complexity and efficiency in a CMS and the problem that static generation solves. In short: *storage is cheap* and *computation is expensive*.
[^2]: This site loads so quickly because all resources are served with Amazon [S3](https://aws.amazon.com/s3/), [CloudFront](https://aws.amazon.com/cloudfront/), and [imgix](https://www.imgix.com/). CloudFront is a fast CDN that can serve content with high availability and low latency.
[^3]: [Ruby](https://www.ruby-lang.org/en/) is a dependency for installing Jekyll, but knowing how to program with Ruby is *not* required to run a Jekyll site. Learning about [YAML](http://yaml.org/) and [Liquid](http://liquidmarkup.org) is nearly essential, however. I also recommend looking into [Bundler](http://bundler.io/) for managing Ruby gem dependencies.
