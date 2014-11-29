---
title: 'Design notes: future-friendliness and robustness'
layout: singel
category: writing
option:
  - code
date: 2014-11-06 09:17
updated: 2014-11-26 10:50
unique-id: 2014-11-06:design-notes-future-friendliness

---

This particular website is small, but I believe the principles that it is based on are far larger. As a part of my design process for this website, I am undertaking small but serious preparations to make it more future-friendly and future-proof, in the spirit of universality and independent publishing.

## Write semantic HTML and Markdown

### HTML as a long-term bet

Plain-text Markdown alongside HTML seems like a good long-term solution for encoding my content. Some impressively prescient folks have weighed in on the “long-term” nature of HTML:

<blockquote>I’m going to make a bold prediction. Long after you and I are gone, HTML will still be around. Not just in billions of archived pages from our era, but as a living, breathing entity. Too much effort, energy, and investment has gone into developing the web’s tools, protocols, and platforms for it to be abandoned lightly, if indeed at all. <footer><cite>John Allsop</cite> – <a href="http://alistapart.com/article/semanticsinHTML5">“Semantics in HTML 5”</a>, <time datetime="2009-01-06">January 6, 2009</time></footer></blockquote>

<blockquote>So HTML is not the best format, but it may just be the longest lasting format, because of its ubiquity, because it’s taken off so much at this point.<footer><cite>Jeremy Keith</cite> – <a href="https://adactio.com/articles/6630/">“Time”</a>, <time datetime="2014-11-06">November 6, 2013</time></footer></blockquote>

Keep in mind, these are the same people who, respectively, [laid the groundwork for responsive web design](http://alistapart.com/article/dao) years before it was established and have been promoting [long-term thinking for quite a few years](https://adactio.com/articles/1522) – that is, forward thinkers. Data formats are fragile. But HTML, as data formats go, is robust and future-oriented.

### Markdown balances ease of use with future-friendliness

Although [Markdown](http://daringfireball.net/projects/markdown/) was intended as a writer’s tool, it is my favorite piece of my note-taking and publishing process. Even this dispatch started as a plain-text file with a `.md` extension, which metamorphoses into HTML. Markdown is comprised of plain text that can be read and edited by anyone, which is processed to become HTML. It is not complete as a markup language. Its strength is that it is entwined with HTML. The semantic gaps not covered by Markdown (`<figure>`, `<cite>`, `<time>` and so on) are covered by simply writing HTML. Even blocks of HTML specific to my site, like `<aside class="ancillary">`, can be written as blocks of HTML, alongside Markdown.

<aside class="ancillary">To increase the chances of avoiding long-term compatibility issues with Markdown processing, I try not to stray <em>too</em> far from basic Markdown. I <a href="https://github.com/opattison/jeancflanagan/pull/14">made a guess in 2013</a> that the <a href="https://github.com/opattison/jeancflanagan/pull/14">Kramdown converter</a> would be a good default bet in Jekyll, which played out well a few months later <a href="http://jekyllrb.com/news/2014/05/06/jekyll-turns-2-0-0/">when it became the default converter</a> for Jekyll 2.0. Kramdown combines classic Markdown, <a href="https://help.github.com/articles/github-flavored-markdown/">GitHub-flavored Markdown</a> and some custom processing features (including nicely structured footnotes which I will probably use). I try to be conservative in my use of Markdown, rather than leaning on it too heavily. When in doubt, I write HTML.</aside>

I never would have been convinced about Markdown if not for such forward and backward compatibility with a subset of HTML. Any [failings that Markdown has](http://indiewebcamp.com/markdown#Criticism) as a language affect a publishing process minimally, since the language plays nicely with HTML. I see in Markdown future-friendliness and robustness approaching that of HTML. It helps that a lot of people and services rely on it and will probably be making Markdown-to-HTML converters for many years to come.

Fundamentally, Markdown is plain text enhanced with semantic properties and a straightforward and readable syntax, and it should be sticking around for a while.


## Plan for portable hosting

By using Jekyll, my site is inherently easy to transfer to another host. The server only needs to be able to serve plain HTML and linked resources. There is no significant server-side dependency, such as PHP or JavaScript. Although Jekyll can be set up many ways, my initial setup is one that has a proven balance between reliability and cost at this scale: Amazon S3. It costs a few dollars a month for me, at most, currently, and performance is solid. Deploying takes a matter of seconds using [s3_website](https://github.com/laurilehmijoki/s3_website), a service that uses Amazon’s API to upload files.

I don't much care for Amazon (I can't trust that any large company will continue to share my ethical standards over the coming years), but for right now, S3 is cheap and easy enough for me to configure. I also have no need to like Amazon, since it is not my content’s “home”. Rather it is merely a conduit for distribution. If I hosted (and *crucially*, published) with other services such as GitHub Pages, Tumblr, SquareSpace, WordPress, I would tie the fate of my site (and maybe even aspects of my content, presentation and process) to the fortunes of larger businesses. Even if a company survives and thrives, there is always the possibility that I may outgrow its capabilities our sour on its services.

<aside class="ancillary">
<p>Having just mentioned GitHub Pages, I should note that I love GitHub. <a href="http://github.com/opattison/olivermakes/">The repository for this site</a> lives there. I have reasons for avoiding GitHub Pages despite its advantages. GitHub Pages is a remarkably convenient and affordable way to host a Jekyll site. Unfortunately, the service rests on the shoulders of a fast-moving venture capital-funded startup, and there is more limited flexibility with implementing Jekyll (no plugins allowed). Even if GitHub dies or becomes untenable for me, I know how to use Git and a web server to keep my repository backed up elsewhere.</p>
</aside>

One example is Flickr, the photo sharing site. I posted *hundreds* of photos to from 2010 to 2012, and I was a paying customer. Although Flickr is not likely going away tomorrow, their focus switched to providing a “free” service (that is, ad supported) that could compete with newer services like Instagram. Flickr is not going away tomorrow, but it has mostly outlived its usefulness for me, with poor interface choices, a diminished community, and a parent company that clearly does not care for its future. If I had relied on Flickr as my main photo library, I would probably be sorely disappointed now.

If I want to escape a service like Tumblr or Flickr, I have to hope that I can export the content I've uploaded and then figure out if I can re-purpose it. With an independent website and content owned directly by me, I can take my content elsewhere without having to do any sort of “exporting” or reconfiguration – it is already portable by its nature, and I have planned for it to be ported.

By choosing a hosting-agnostic approach paired with a static site, I am free to set up S3 quickly and flexibly. I would be able to work similarly with any other basic hosting plan, should I ever need to migrate. My method allows me to pack my things and set up elsewhere in very little time at all, since my bare dependencies are: a domain, HTTP, HTML, and CSS (and [*maybe* some other stuff that I will get to](/2014/11/design-notes-dependencies/)). The web and all its parts are decentralized by design, and I want my content to be as decentralized from infrastructure or publishing constraints as possible.

- - -

## A static site makes independent publishing approachable

Serving only static files is future-friendly and robust, which means my content and distribution remain independent in two important ways:

- Content and distribution are independent *from each other* – that is, **a separation of concerns**. This key principle of programming and good design also happens to be serve the needs of independent publishing.
- Content and presentation are independent from each other as well. No content management system dependency means that all I have is a single CSS file and a measured amount of Jekyll-specific markup ([Liquid templating](http://jekyllrb.com/docs/templates/)). These bits of markup only have a superficial effect on the mode of presentation, since they can and will change as my website and Jekyll evolve, but the HTML that they represent does not need to. 

Most importantly, no cruft or opinionated design from a framework or CMS can change my approach to structure and presentation. Anything I put into my site, whether an enhancement or method of working, is my choice alone.

Additionally, I have an [RSS feed]({{ site.link.subscribe.full }}) and I plan to integrate with other APIs and services in the future. However, this site will remain the hub and the canonical location for the data it contains. I don't particularly mind if people read it in a read-later app or an RSS reader, or even with some translator service of the unknown future. Robots and humans alike can do what they like with my work, as long as it is hyperlinked and attributed to the original source.