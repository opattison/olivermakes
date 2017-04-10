---
title: 'Preserving iterative website design'
layout: edgeless
category: 'projects'
option:
  - featured-writing
  - minor
tags:
  - 'archiving'
  - 'design'
  - 'git'
  - 'indieweb'
  - 'jekyll'
  - 'process'
  - 'web'
updated: 2016-10-08 20:10
drafted: 2016-10-07 10:40
unique_id: 2016-10-08:preserving-jekyll-sites
period: 2016-04 to present
description: 'An approach to archiving versions of web projects using Jekyll and Git.'
project:
  url: https://2015.olivermak.es
  source: https://github.com/opattison/olivermakes/tree/2015-archive
image_index: 2016-10-09-perspective-screens.svg
image:
  - src: 2016-10-09-perspective-screens.svg
    src_png: 2016-10-09-perspective-screens.png
    alt: 'abstract depiction of three layered screens in perspective'

---

Everything on the web is temporary by default. No special effort is needed to make something ephemeral. Inevitably when a website gets redesigned or writing is edited, something is lost. If we don’t take intentional measures, our creative work can crumble quickly.

What about taking more than just screenshots and fragments of work? Why not preserve a website in its original form? How can we preserve the entire thing at a moment in time? One well-known example is the Internet Archive’s [Wayback Machine](https://archive.org/) which aims to index and capture every website it can. A personal favorite is [Jason Santa Maria’s personal site](http://jasonsantamaria.com) which has archived versions of each of the five designs of his site going back over 15 years (see [version 4](http://v4.jasonsantamaria.com)).

{% capture blockquote %}
So, yes, important things will get saved. But that doesn’t feel like a solid argument for how preservation happens.

Maybe those things weren’t saved because they were important. *Maybe they were important because they were saved.*
{% endcapture %}

{% include block/blockquote.html author="Jason Santa Maria" date="2015-02-13" source="“Saved”" source_url="http://jasonsantamaria.com/articles/saved" %}

## Problem: iterative archiving

It is difficult to find websites that have lasted, mostly unchanged, mostly still working as designed for more than a couple of years, let alone a decade or longer. My work should be resiliant in the present and in a perserved form in the future. Given [how fragile and short-lived URLs and web sites are](http://britishlibrary.typepad.co.uk/webarchive/2014/10/what-is-still-on-the-web-after-10-years-of-archiving-.html) in general, this is not an easy task.

I don’t often think of the websites I make as having discrete versions – at least not like software is versioned. Content can always be updated and is always in flux over time. Designs are updated in an iterative manner, with many small changes applied over time rather than waiting for a big reveal at a new version. Not all designers work this way, but I find it is true with my personal projects. So, calling things by definitive version numbers is out.

Relying on a third party service must be ruled out as well. The Internet Archive’s capturing system excels at preserving fragments of the web that no one bothered to archive in another way, but it is often incomplete in ways that are frustrating. In some cases, not all of the pages are captured at a single date in time, and often the JavaScript or image references for the site slowly fall apart over time.

## Solution: Git and static sites

One brilliant thing about [Jekyll](http://jekyllrb.com) or other static site generators is that once you build a site with it successfully, you now have a collection of HTML files that are ready to be served from a web server. And the characteristic feature of Git is the possibility to travel in time, checking out any single commit (a change to the repository).

If you have a Jekyll project that has 120 Git commits, you have 120 iterations of that website, and presumably each of them would contain the ingredients to successfully build a Jekyll site. By picking out a single commit you can generate the HTML files for that iteration (by installing the software dependencies on your computer and building the Jekyll site, typically done with a single command like `jekyll build`). The content and design as it existed on the day can be checked out with Git, built with Jekyll, and deployed anywhere, whether on the public web or in a backed up folder on a local system.

For example, I could generate [my website as it existed in November 2015 at 2015.olivermak.es](https://2015.olivermak.es) or as it existed in [December 2016](https://2016.olivermak.es). [^1] With some predictable URL design (a subdomain like `yyyy.example.com` for the parent site `example.com` with `yyyy` being the year), I have a plan for generating annual archives. I could create a URL design that allows for archiving more fine-grained than a year, but these particular websites don’t change *that* quickly. I like this approach more than the `v1`, `v2`, `v3` method I’ve seen which makes a lot of sense for archiving software documentation or websites that only receive infrequent and monolithic design changes, but less sense for sites that have slowly and steadily evolving content and design.

## Related project

{% include block/project--satellite.html id="2014-12-02:oliver-pattison" %}

{% capture endnote %}
## Further reading

- [Tim Berners-Lee on URI design and archiving on the web](https://www.w3.org/Provider/Style/URI.html.en)
- [Mandy Brown on preservation and Jekyll](http://aworkinglibrary.com/writing/index-cards/)
- [Andy Jackson (British Library) analyzing 404 entropy on the web](http://britishlibrary.typepad.co.uk/webarchive/2014/10/what-is-still-on-the-web-after-10-years-of-archiving-.html)
- [Jason Santa Maria on why things published on the web ought to be saved](http://jasonsantamaria.com/articles/saved)

**[Read more writing on archiving](/labels/archiving/)** from this site.
{% endcapture %}

{% include block/ancillary--endnotes.html %}

[^1]: The [2014-2015 design]({{ page.project.url }}) for this site lives on its own [GitHub branch]({{ page.project.source }}), which is essentially a permanent fork of the project that will be frozen in time. I use GitHub’s branch protection feature to prevent merging or deleting the branch. I also created an archive for [Jean’s site]({% post_url 2016-10-02-jean-flanagan-2016 %}). Compare the [2013-2016 site](https://2016.jeancflanagan.com) to [the current site](https://jeancflanagan.com).
