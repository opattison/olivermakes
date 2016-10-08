---
title: 'Preserving a Jekyll site over time'
layout: edgeless
category: 'projects'
option:
  - featured-home
  - minor
tags:
  - 'archiving'
  - 'design'
  - 'git'
  - 'indieweb'
  - 'jekyll'
  - 'process'
  - 'web'
updated: 2016-10-08 12:33
drafted: 2016-10-07 10:40
unique_id: 2016-10-08:preserving-jekyll-sites
period: 2016-04 to present
description: 'How I create archived versions of web projects using Jekyll and Git.'
project:
  url: https://2015.olivermak.es
  source: https://github.com/opattison/olivermakes/tree/2015-archive

---

I believe strongly in creating content and design for the long term. I have an appreciation for ephemerality, but it’s important to remember that everything is temporary by default. No special effort is needed to make something ephemeral. If we don’t take extraordinary measures, our creative work crumbles quickly.

Inevitably when a website gets redesigned or writing is edited, something is lost. I want to take high fidelity pictures of my work, but not just screenshots and fragments: I want to preserve the entire thing in a moment.

Why not preserve a website in its original form? I had seen a few examples of this (notably [Jason Santa Maria’s variants](http://v4.jasonsantamaria.com) for each of the 5 iterations of his site going back over 15 years). There’s also the example of the Internet Archive’s [Wayback Machine](https://archive.org/) which aims to index and capture every website it can.

{% capture blockquote %}
So, yes, important things will get saved. But that doesn’t feel like a solid argument for how preservation happens.

Maybe those things weren’t saved because they were important. *Maybe they were important because they were saved.*
{% endcapture %}

{% include block/blockquote.html author="Jason Santa Maria" date="2015-02-13" source="“Saved”" source_url="http://jasonsantamaria.com/articles/saved" %}

## How to archive

I don’t often think of the websites I make as having discrete versions – at least not like software is versioned. Content can always be updated and is always in flux over time. Designs are updated in an iterative manner, with many small changes applied over time rather than waiting for a big reveal at a new version. Not all designers work this way, but I find it is true with my projects. So, calling things by version numbers is out. I have to create snapshots of progress, not definitive versions.

Relying on a third party service to do it for me must be ruled out as well. As much as I love the Internet Archive, there is often something incomplete about the way a site is archived. In some cases, not all of the pages are captured at a single date in time, and often the JavaScript or image references for the site slowly fall apart over time. Their capturing system excels at preserving fragments of the web that no one bothered to archive in another way, but it is often incomplete in ways that are frustrating. And there is the advantage of keeping your archive safe by making yet another copy of it.

I want to make sure my work is resiliant in the present and has a perserved form in the future. Given [how fragile and short-lived URLs and web sites are](http://britishlibrary.typepad.co.uk/webarchive/2014/10/what-is-still-on-the-web-after-10-years-of-archiving-.html) in general, this is not an easy task. It is difficult to find websites that have lasted, mostly unchanged, mostly still working as designed for more than a couple of years, let alone a decade or longer.

## Solution: Git and static sites

One brilliant thing about [Jekyll](http://jekyllrb.com) is that once I have built a site with it successfully, I now have a collection of HTML files that are ready to be served from a web server. And an amazing feature of Git is the possibility to travel in time, checking out any single commit (a change to the repository).

If I have a Jekyll project that has 120 Git commits, I have 120 iterations of my website, and presumably each of them would contain the ingredients to successfully build a Jekyll site. By picking out a single commit I can generate the HTML files for that iteration (by installing the software dependencies on my computer and building the Jekyll site, typically done with a single command like `jekyll build`). The content and design as it existed on the day that I select can be selected with Git, built with Jekyll, and deployed anywhere I like, whether on the public web or in a backed up folder on my local system.

For example, I could generate [my website as it existed in November 2015](https://2015.olivermak.es) or [Jean’s website as it existed in September 2016](https://2016.jeancflanagan.com). With some predictable URL design (a subdomain like `yyyy.example.com` for the parent site `example.com` with `yyyy` being the year), I have a plan for generating annual archives of any Jekyll site. I could create a URL design that allows for archiving more fine-grained than a year, but these websites don’t change *that* quickly. I like this approach more than the `v1`, `v2`, `v3` approach I’ve seen which makes a lot of sense for archiving software documentation or websites that only receive infrequent and monolithic design changes, but less sense for sites that have slowly and steadily evolving content and design.

## Examples

I’ve implemented such an archiving process on this site. The [2014-2015 design]({{ page.project.url }}) for this site lives as its own [GitHub branch]({{ page.project.source }}), which is essentially a permanent fork of the project that will be frozen in time. I use GitHub’s branch protection feature to prevent merging or deleting the branch.

I also created an archived version of Jean’s site. Compare the [2013-2016 site](https://2016.jeancflanagan.com) to [the current site](https://jeancflanagan.com).

{% capture endnote %}
## Further reading

- [Tim Berners-Lee on URI design and archiving on the web](https://www.w3.org/Provider/Style/URI.html.en)
- [Mandy Brown on preservation and Jekyll](http://aworkinglibrary.com/writing/index-cards/)
- [Andy Jackson (British Library) analyzing 404 entropy on the web](http://britishlibrary.typepad.co.uk/webarchive/2014/10/what-is-still-on-the-web-after-10-years-of-archiving-.html)
- [Jason Santa Maria on why things published on the web ought to be saved](http://jasonsantamaria.com/articles/saved)

**[Read more writing on archiving](/labels/archiving/)** from this site.
{% endcapture %}

<aside class="ancillary--endnotes">
{{ endnote | markdownify }}
</aside>

## Related

{% include block/project--satellite.html id="2014-12-02:oliver-pattison" %}
