---
title: 'How to design a better responsive code block'
layout: singel
code: true
category: writing
date: 2014-10-24 16:15
updated: 2014-11-25 09:25
image:
  - src: 2014-11-25-word-wrap-code-breaking.png 
    alt: A sample of layout-breaking code without word-wrap
  - src: 2014-11-25-break-word-code-breaking.png
    alt: A sample of layout-breaking code without break-word

---

Typography can be difficult to get right in a responsive design. Formatting code for readability with multiple types of content in various contexts is not easy, and the defaults are not on our side. Default user agent styles in browsers are useless for code, so it is important to optimize these styles when starting a project, such as a documentation project or technical blog. When we design responsive sites, we have to assume that readers want to look at code even on a small screen, so let us consider how code blocks or inline code are displayed.

Even if your CMS or site builder has code highlighting built in (like [Jekyll](http://jekyllrb.com) and [Pygments](http://pygments.org/), much more needs to be explicity designed. Responsive images are a big deal in responsive design implementation – a `max-width: 100%` delcaration solves quite a few problems with layouts. But many site layouts break when resized down to reasonable viewport widths, thanks to text flow styles. *Text*, and especially code, can easily break an otherwise adaptive layout. In some cases, text flows outside of the viewport and is rendered inacessible, or the page is forced to have overflow on the right, adding a scrollbar and breaking the 100% width layout. And it is not just code blocks – even a long URL can break in the comments section of a website without proper care.

So how do we fix this?

## Prevent breaking words and lines

In this example for “front-end” web code blocks, I am including styles that are hopefully “bullet-proof” as far as breaking layout is concerned.[^1] `overflow-wrap: break-word` is applied to not just code samples, but to the entire `body`. `white-space: pre-wrap` is applied to all `code` and `pre` elements.

For `white-space`, the default value `normal` definitely will not work. `pre-wrap` is far preferable to `line-wrap` since [the latter does not maintain sequences of white space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space), which is crucial for most code.

### The defaults

{% highlight css linenos %}
body {
  max-width: 100%;
  word-wrap: break-word; /* force long words to break */
  overflow-wrap: break-word; /* newer syntax standard that replaces word-wrap */
}

code,
pre,
samp {
  white-space: pre-wrap; /* force long lines to break */
}
{% endhighlight %}

### Visual examples without `pre-wrap` and `break-word`

So how bad is it when code or any other long content breaks a layout? Here is what a sample from this page looks like without `white-space: pre-wrap`:

<img
  src="{{ site.image-url }}/{{ page.image[0].src }}" 
  alt="{{ page.image[0].alt }}"
>

Here is what a sample from this page looks like without `overflow-wrap: break-word`:

<img
  src="{{ site.image-url }}/{{ page.image[1].src }}" 
  alt="{{ page.image[1].alt }}"
>

I think these samples speak for themselves to explain why this code is needed for a responsive code block. With both of them not implemented, nearly every code block on this page runs off the page, breaking the layout.

## Nicer typography and spacing

There is more to a well-designed responsive code block than line wrapping. One should also consider typography, color and proportion.

My monospace font is [Adobe Source Code Pro](http://adobe-fonts.github.io/source-code-pro). It looks nice, and [it is free to use](http://www.google.com/fonts/specimen/Source+Code+Pro). To make sure that code blocks looks their best, I make sure that the monospace typeface for code is proportional to the rest of the typography on my site, so that is around .8125em on a site based on a 1em scale, depending somewhat on the monospace typeface.

I have plenty more styles used to make the code blocks work on this site [^2] but the following example highlights some fundamentals.

### Expanding on the defaults

<figure class="code">
{% highlight css linenos %}
body {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

code,
pre,
samp {
  font: 400 .8125em/1.4375 'source-code-pro', Menlo, Consolas, monospace; /* Source Code Pro with fallbacks. */
  white-space: pre-wrap;
}

p > code,
li > code,
samp {
  border: solid 1px hsla(204, 10%, 80%, 1);
  border-radius: .25em;
  margin: 0 -.03125em;
  padding: .0625em .25em 0; /* breathing room for inline code that has a different background or an outline */
}

.highlight {
  margin: 1em -1em; /* -1em left/right margins for full-bleed code samples (assuming 1em left/right padding parent element) */
  padding: 1em;
}

pre > code {
  font-size: 1em; /* prevents recursive .8125em from applying in common `<pre><code>` markup pattern */
  padding: 0;
}
{% endhighlight %}
<figcaption><p><a href="https://github.com/opattison/olivermakes/blob/master/site.css#L295">View the latest version</a> of this CSS in full at the source.</p></figcaption>
</figure>

Notice how the long comments above wrap around the page. I have intentionally included long comments with no line breaks to show how they look in a code block. (The `.highlight` selector targets a class that Jekyll applies to `<div>` surrounding a `<pre>` block.)

### Why does HTML especially need this?

{% highlight html linenos %}
<p>This website uses a version of this CSS, so the code block above follows the same principle. Notice how the long comments above wrap around the page. I have intentionally included long comments with no line breaks to show how they look in a code block. The <code>.highlight</code> selector targets a class that Jekyll applies to <code>&lt;div&gt;</code> surrounding a <code>&lt;pre&gt;</code> block.</p>

<hr>

<p>An example of <a href="http://example.com/areallylongurlthatwouldotherwisebreakwithoutbreakword">a really long string</a>.</p>
{% endhighlight %}

This HTML block sample has a long paragraph that illustrates the line-length issue. HTML commonly has long line-lengths where wrapping is essential for readability.

## Is there any other way to handle code blocks responsively?

The other way to handle this responsive dilemma is to use `overflow: scroll` for code blocks. This declaration makes long code blocks scroll instead of wrap around to new lines.

{% highlight css linenos %}

code,
pre,
samp {
  overflow: scroll;
}

{% endhighlight %}

A few of notes about this method:

1. Line numbers are respected. The line will not break unless a break is added in code.
2. It is not compatible with `overflow-wrap: break-word` methods, as the name might suggest.
3. On really small screens, the method can lead to a lot of scrolling and discontinuity from one line to another.
4. It does not prevent problems for large screens, given long enough lines.

Here it is in action, with the HTML sample from earlier:

<div class="highlight">
  <pre style="overflow: scroll;">
    <code class="language-html" data-lang="html" style="word-wrap: normal; overflow-wrap: normal; white-space: pre">
      <span class="lineno">1</span> <span class="nt">&lt;p&gt;</span>This website uses a version of this CSS, so the code block above follows the same principle. Notice how the long comments above wrap around the page. I have intentionally included long comments with no line breaks to show how they look in a code block. The <span class="nt">&lt;code&gt;</span>.highlight<span class="nt">&lt;/code&gt;</span> selector targets a class that Jekyll applies to <span class="nt">&lt;code&gt;</span><span class="ni">&amp;lt;</span>div<span class="ni">&amp;gt;</span><span class="nt">&lt;/code&gt;</span> surrounding a <span class="nt">&lt;code&gt;</span><span class="ni">&amp;lt;</span>pre<span class="ni">&amp;gt;</span><span class="nt">&lt;/code&gt;</span> block.<span class="nt">&lt;/p&gt;</span>
      <span class="lineno">2</span> 
      <span class="lineno">3</span> <span class="nt">&lt;hr&gt;</span>
      <span class="lineno">4</span> 
      <span class="lineno">5</span> <span class="nt">&lt;p&gt;</span>An example of <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"http://example.com/areallylongurlthatwouldotherwisebreakwithoutbreakword"</span><span class="nt">&gt;</span>a really long string<span class="nt">&lt;/a&gt;</span>.<span class="nt">&lt;/p&gt;</span>
    </code>
  </pre>
</div>

I believe this method is particularly poorly suited for HTML or any other code with comments in it. It is responsive, but not as adaptive to different screens as the `break-word` method.

[^1]: I am focusing here on web front-end markup, since that is what I care most about, but I have not covered exceptions and use cases from other programming languages. The same principles should apply to some other contexts, but I have not tested them out thoroughly. I know that some programming languages have peculiarities with white space and line numbers, so this might have limited use for those cases. This technique prioritizes readability on small screens ahead of any other concerns so that readers do not have to suffer scrolling or tiny font sizes.
[^2]: I created a [custom base16 color pattern]({{ site.fragments-url }}/base16-olivermakes.html) for the site, which I processed into a [Pygments](http://pygments.org/) theme using [base16-builder](https://github.com/chriskempson/base16-builder). Also, take a look at [this site’s source](https://github.com/opattison/olivermakes/blob/master/site.css) for more examples.