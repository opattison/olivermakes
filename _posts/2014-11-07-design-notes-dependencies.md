---
title: 'Design notes: an accounting of dependencies'
layout: singel
date: 2014-11-08 12:34
updated: 2014-11-26 10:59

---

What is involved in making this site work, at minimum? How do these dependencies affect the long-term survivability of the site and its implementation?

## A browser, a text editor, a command line

I really only need a browser, a text editor and Terminal to maintain the website. I can write HTML and CSS, design and test in a browser (Chrome primarily, but also Safari, Firefox and some mobile browsers), control the version history with Git, and deploy to the website with Terminal.

## Leasing the domain/URI

It is unfortunate that the domain system has built-in impermanence that even the best planning cannot work around. Since domain names are leased and not purchased, all other future-proofing schemes could be let down by something as common as an expired credit card or a lost email. I have the date reminder set for 2017 when that next rolls around for me, but it is striking how fragile this is compared to all of the other parts of this system that can more easily be mitigated or replaced. I wonder how long into the future we will have to wait for a more permanent addressing for the web, if it will ever come.

## Adobe Lightroom, Photoshop and image manipulation tools

Lightroom is essential for editing photos and managing a large photo library, which is part of the website. Photoshop is not necessary for editing them, but I do optimize images and export images at multiple sizes for responsive images. For vector graphics, I use Adobe Illustrator. I also use the open source software [ImageOptim](https://imageoptim.com) to save bytes on photos, which is invaluable. While I integrate these tightly into my process for making the website, there *are* alternatives to them, and not having access to them would not prevent me from maintaining the site as it exists now.

## TypeKit for fonts

Besides the domain, this is one of the few parts of the site that I have to continue paying for on a subscription basis to keep the site running as designed. TypeKit has a beautiful library of fonts, and I am quite happy with the one that I selected. While my site would not break without these fonts, hosted web fonts that I do not own are an integral part of the current version of the site. My current solution for typography functions as a “rental”.

However, if I had to break free from Adobe CC or TypeKit as dependencies, I could [buy Ratio](http://cargocollective.com/pstype/Ratio) and host it myself. I use [Source Code Pro](http://adobe-fonts.github.io/source-code-pro/) for monospace typography, also hosted by Typekit, but that font is available for free, and therefore does not pose any sort of issue.