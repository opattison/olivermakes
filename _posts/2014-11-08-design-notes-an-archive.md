---
title: 'Designing this site: an archive'
layout: singel
option:
  - index-image
category: writing
tags:
  - 'archiving'
  - 'future'
  - 'photography'
  - 'web'
date: 2014-11-08 12:34
updated: 2015-03-02 21:05
drafted: 2014-11-08 12:34
unique-id: 2014-11-08:design-notes-an-archive
description: 'On my approach to self-archiving.'
image:
  - src: 1988-oliver-young.jpg
    alt: 'Oliver as a toddler'
    caption: 'A photo taken of me in … 1988? I have no idea! This is an example of why I miss having a complete archive.'

---

Looking back at my files and memories from my life so far, I find there are few things that are constant or well-maintained. I do not own a physical album of photos from when I was young – I wish I did. I do not even have many scans of old photos. I am missing most of my creative output from when I was younger, as well. I think my life would be richer for having a better understanding of where I came from.

<figure class="right">
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}" 
    alt="{{ page.image[0].alt }}"
  >
  <figcaption>{{ page.image[0].caption | markdownify }}</figcaption>
</figure>

If you never have, you should dig into the [Internet Archive’s Wayback Machine](https://archive.org/web/). You can find the history of sites no longer online, or no longer in their previous form. All of those attempts, versions and missteps are encoded in HTML and publicly hosted until they are discarded in a matter of months or years. The Archive team saves this history. It is cared for by preservationists who realized that if they did not make the effort, this creative output and cultural memory would certainly be lost history in the space of far less than a lifetime (since, by default, not much lasts long on the web).

It takes a lot of effort to keep a comprehensive and long-lasting archive of one’s own history and output. While I strive to get better at backing things up and creating systems for maintaining old files, it is possible to build a website with the intention to serve the future instead of just the present moment.

<aside class="ancillary">
  <h1>How to back up a personal&nbsp;archive</h1>
  <p>Right now my home backup system works like this:</p>
  <ul>
    <li>Back up my MacBook to a Time Capsule running <a href="http://en.wikipedia.org/wiki/Time_Machine_(OS_X)">Time Machine</a>.</li>
    <li>Store a complete archive of all of my photography on a local external drive. I use a <a href="https://www.lacie.com/US/products/product.htm?id=10600">LaCie D2 Thunderbolt</a>.</li>
    <li>Keep <a href="https://www.backblaze.com">Backblaze</a> running, backing up both the MacBook and the external drive.</li>
  </ul>
  <p>This means I have a local repository, a working remote copy on GitHub, and then a local backup of everything (Time Machine), and a remote backup of everything (Backblaze). It is robust enough for now, and it is literally fire-proof.</p>
</aside>

I am building an archive.
{:.focus}

Git will help me keep track of versions and ensure that I lose as little data as possible while working on projects. Because the data for the site will be kept off-site (in a GitHub repo) that can also be backed up in multiple other ways, this should prove more robust and long-lasting than any software I have ever used.

I hope that the best way to maintain an archive that I will be happy to browse years later is to take extra effort now to design it as one. Once I have more written and archived, I look forward to the design challenge of organizing that information. Too much of the web right now is structured as “news”, or otherwise oriented toward ephemerality. I want to see more sites that treat themselves as long-lasting things, with information design and content that is built to last – not to be buried and forgotten about.

I plan to share more about archiving-friendly design practices as they take form. **[Read more writing on archiving](/label/archiving/)** from this site.