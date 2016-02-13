---
title: 'Setting up CloudFront and TLS (HTTPS) with Jekyll'
layout: singel
option:
  - code
  - minor
  - no-imgix-source
category: 'projects'
tags:
  - 'indieweb'
  - 'jekyll'
  - 'privacy'
  - 'web'
date: 2016-01-24 20:37
updated: 2016-01-29 16:13
drafted: 2016-01-24 22:00
unique_id: 2016-01-24:aws-tls-certificate-with-jekyll
description: 'A step-by-step guide on how I configured and hosted a secure static site using AWS.'
project:
  source: https://github.com/opattison/olivermakes/pull/228
image_index: /images/2016-01-25-lock.svg
image:
  - src: /images/2016-01-25-lock.svg
    src_png: /images/2016-01-25-lock.png
    alt: 'A stylized lock inspired by the green TLS lock symbol in a web browser.'
    date: 2016-01-25
    description: 'Designed in Sketch'
  - src: /images/2014-10-08-tea-olivermakes-ccbync.jpg
    alt: 'A hot cup of English tea.'
    date: 2014-10-08
  - src: /images/2016-01-25-cloudfront-record-set.png
    alt: 'Screenshot of a CloudFront record set.'
    date: 2016-01-25
  - src: /images/2016-01-25-only-sni.png
    alt: 'Screenshot of radio select for SNI'
    caption: 'Adjusting Custom SSL Client Support and Default Root Object in CloudFront.'
    date: 2016-01-25
  - src: /images/2016-01-25-custom-ssl.png
    alt: 'Screenshot of radio select for Custom SSL Certificate'
    caption: 'Selecting a Custom SSL Certificate. “SSL” is used interchangably with “TLS” in the AWS CloudFront console.'
    date: 2016-01-25
  - src: /images/2016-01-24-aws-certificate.jpg
    alt: 'Screenshot of a certificate in the AWS console.'
    caption: 'What a properly issued and functioning certificate looks like when after assigning it to a CloudFront distribution.'
  - src: /images/2016-01-25-secure-site.png
    alt: 'This website shown in Google Chrome as being served with TLS.'
    date: 2016-01-25

---

This is a guide to getting set up quickly and cheaply to host a static website on Amazon Web Services with a [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) certificate.
{:.focus}

We live in a time of significant uncertainty about what privacy means. Our personal data and identity are closely monitored and threatened by governments, companies, and individuals who have proven that they can’t be trusted. At the least, we expect our email services, banks and shopping carts to be served entirely over secure connections. Transport Layer Security (TLS) prevents [information from being altered mid-stream](https://www.aaron-gustafson.com/notebook/more-proof-we-dont-control-our-web-pages/) and is the main line of protection on the web against passwords and other sensitive information being read over open networks. TLS is one method for determining that a site is what it claims to be. I would want others to configure their websites using TLS, so why wouldn’t I do my part, even for a private website like my own? I value the principles of privacy of communication and freedom from surveillance enough that I decided my own site should be served over a secure connection.

Serving over HTTPS with SSL or TLS used to be difficult to configure, and sometimes prohibitively expensive. Fortunately the solution for this problem [isn’t nearly as much of a barrier anymore](https://www.tbray.org/ongoing/When/201x/2012/12/02/HTTPS). An individual can afford to host a website cheaply, and a TLS certificate can now be added for a very low cost on top of that. Amazon Web Services (AWS) has made it straightforward enough for me to do in an afternoon.

## Reasons for picking AWS

Amazon Simple Storage Service (S3) is a fast and usually inexpensive way of hosting a static site. S3 typically offers better value for money compared to other budget hosting options, since the initial costs are lower with no fixed payment floor and performance can be surprisingly fast compared to shared hosting. Amazon CloudFront, a content delivery network, enhances S3’s capability by serving files based on their location as determined by network latency. Serving files as close as possible to the user can yield significant gains in performance. A bucket of hosted S3 files can hook right into CloudFront, so an S3 site can be configured to serve with CloudFront instead with only a few minutes of configuration time.

AWS is the so-called “cloud”. What this really means is that Amazon provides a collection of remote, abstracted servers with tools for deploying and hosting website and web services. Together, S3, CloudFront and the AWS Certificate Manager enable hosting a personal static site for potentially only a couple of dollars per month. A TLS certificate can now be had initially for *free* for a CloudFront site.

## Assumptions before starting

- An existing Jekyll site (or something similar that requires only static files to be hosted).
- A domain for that site like `example.com` or `olivermak.es`.
- Access to an administrator email account associated with that domain. In my case this meant having an `administrator@` email which I set up with Hover, but other domains may not require this.
- An Amazon AWS account.

Before I get to [the part about configuring a TLS certificate](#step-4), I’ll cover my method for setting up S3 for hosting, CloudFront as a CDN (and a requirement for the certificate) and Route 53 for DNS routing. It’s a bit of a complicated process, but it is worth it. Getting the certificate is free and very brief for those already set up with AWS CloudFront.

---

## Step 1: S3
{:#step-1}

I have been working with hosting static sites on S3 since 2013, so I already had a head start on this part. Initial setup was a bit confusing, but now that I am familiar with it, it is my preferred method for hosting Jekyll sites.

S3 initially requires setting up at least one “bucket” of files, which is essentially a directory that can be made into a public site. An S3 bucket is the target to deploy a static site to.

### Create a bucket

Go to the [S3 management console](https://console.aws.amazon.com/s3) and select **Create bucket**. Create a unique name with no spaces (dots and dashes allowed). It does not have to be the same as the domain, but it might be easier to remember if it is. Choose a geographically close region.

### Add an S3 bucket policy

In the **Properties** configuration for the bucket go to the **Permissions** section and then select **Edit bucket policy**. Setting a policy properly allows a bucket to be visible on the public web.

{% capture c1 %}
```
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "AddPermissions",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::BUCKETNAME/*"
    }
  ]
}
```
{% endcapture %}

<figure class="code">
{{ c1 | markdownify }}
<figcaption><p>A sample S3 bucket policy – without this JSON file the bucket’s data will be completely private and inaccessible on the web. Replace <code>BUCKETNAME</code> with the name of the bucket.</p></figcaption>
</figure>

### Configure static website hosting

Go to the **Static Website Hosting** section and choose the option **Enable website hosting**. Add `index.html` for the index document and `404/index.html` for the error document. While here, copy the **Endpoint** which looks like `BUCKETNAME.s3-website-us-east-1.amazonaws.com`. Save.

### Set up s3_website for deploying (optional)

I deploy my Jekyll sites with [s3_website](https://github.com/laurilehmijoki/s3_website), a Ruby gem developed specifically for deploying Jekyll and other static sites. The tool sidesteps the challenge of dealing directly with the AWS API, sets up performance-friendly options and can be run from a command line interface. s3_website takes the generated `_site` folder in Jekyll and publishes it to a specified S3 bucket.

[Read the s3_website docs](https://github.com/laurilehmijoki/s3_website) or take a look at [my site’s configuration]({{ site.source_url.repo }}), particularly [the s3_website.yml configuration file (current at time of publishing)](https://github.com/opattison/olivermakes/blob/232b52175caa18f6897f615ccc70133e78962bc2/s3_website.yml). One important warning here: *make sure not to commit private AWS keys to version control*. I used environmental variables in OS X’s Terminal to privately save my AWS [“access key ID” and “secret access key”](http://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) to keep them out of my site’s Git version control.

s3_website configuration could be an article on its own, so I’ll defer to their extensive documentation. In any case, it’s part of [my deployment process](https://github.com/opattison/olivermakes/blob/232b52175caa18f6897f615ccc70133e78962bc2/Rakefile#L26-L44) for this site, and it *can* be done even without being an experienced programmer.

---

## Step 2: CloudFront
{:#step-2}

### Create a distribution

Go to the [CloudFront configuration](https://console.aws.amazon.com/cloudfront/home) and **Create Distribution** (select a “Web” distribution when prompted). The **Origin Domain Name** should be set to the endpoint from the S3 bucket (looks like `BUCKETNAME.s3-website-us-east-1.amazonaws.com`).

### Configure

Set **Alternate Domain Names (CNAMEs)** to the desired domain. Leave **SSL Certificate** alone – or [skip ahead to the final step](#step-4) to take care of this now. Set **Default Root Object** to `index.html` which makes sure that the root domain `https://example.com/` will redirect to an index page rather than showing a directory of files or an error message. I set **Logging** on and created an S3 bucket for it, but it is not essential for configuration. Set **Distribution State** to “enabled” (default value).

If using s3_website to handle S3 and CloudFront, [read about invalidations](https://github.com/laurilehmijoki/s3_website#how-to-use-cloudfront-to-deliver-your-blog). CloudFront invalidations cost money after the first 1,000 URLs. [Read about CloudFront caching](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) (TTL settings) to avoid issues around invalidations.

### Wait

This is point where I would brew a cup of tea since it will take 5-20 minutes for CloudFront to “progress”. The first couple of times I used CloudFront, I spent more time changing configuration items and waiting for effects to kick in than I actually did reading AWS documentation. CloudFront configuration takes a really long time – take time to try to get the configuration correct initially because each further change requires resetting the clock to zero (and making another cup of tea)!

{% assign count = 1 %}
{% assign quality = 50 %}
{% include block/srcset_narrow.html %}

---

## Step 3: Route 53 (optional)
{:#step-3}

Setting up Route 53 for handling routing isn’t absolutely required, but I found it helpful since it keeps all of the administration in one place. Also, Route 53 starts at a flat 50 cents per month per domain. One could configure DNS with another service, but I chose Route 53. Avoid this step for live domains and websites until some brief downtime is acceptable.

### Create a hosted zone

Sign in to the [Route 53 console](https://console.aws.amazon.com/route53/home) and create a new **Hosted Zone** with the target domain. After it is created, copy the **Name Servers** and add them individually to that domain’s registrar administration for name servers. Now Route 53 handles configuration for the domain.

### Wire Route 53 to CloudFront

Create an `ALIAS` record for the root domain. In the hosted zone select **Create Record Set**. Leave **Name** blank to set the target URL. **Type** should be “A – IPv4 address”. **Alias** should be set to “Yes”. **Alias target** should be set to the CloudFront distribution URL from the distribution created in [step 2](#step-2) (looks like `a12bcdefgh89yz.cloudfront.net.`). Save.

<figure class="image--half screenshot">
  <img src="{{ page.image[2].src | imgix_url }}" alt="{{ page.image[2].alt }}">
</figure>

As with CloudFront configuration, do not expect the changes to kick in immediately. Redirecting the domain to the configured distribution takes a few minutes.

Before setting up TLS, make sure all URLs on the site are working properly at their `http://` location.

---

## Step 4: TLS certificate on CloudFront
{:#step-4}

Edit the configuration for the CloudFront distribution set up in [Step 2](#step-2). Select **Custom SSL Certificate (example.com)** and then **Request an ACM certificate**. The request for the TLS certificate is made at no cost through AWS Certificate Manager, another console service. Alternatively, go to the [ACM console](https://console.aws.amazon.com/acm/home) and **Request a certificate**.

There are two key steps:

1. Adding a domain name. Or add two to cover subdomains with the same certificate. Entering `example.com` and `*.example.com` will cover both the domain and all subdomains.
2. Validation via email.

{% capture a1 %}
Getting a validation email wasn’t as easy as I had hoped. I had to set up an `administrator@` email account with Hover (my domain registrar) and then configure an `MX` record in Route 53 to make sure that I could receive email. Maybe this was peculiar to my domain, but it was easily the biggest hassle in the certificate registration process since I wasn’t expecting to have to do it.
{% endcapture %}

<aside class="ancillary">
{{ a1 | markdownify }}
</aside>

To be on the safe side, choose _both_ `example.com` and `*.example.com` when setting up the certificate. Since only one certificate is allowed per CloudFront distribution, this covers any subdomains needed for the same certificate.

After following the instructions in the email and approval page to validate the certificate, go back to the CloudFront distribution and select the certificate. Set **Viewer Protocol Policy** to “Redirect HTTP to HTTPS”. *Absolutely* set **Custom SSL Client Support** to “Only Clients that Support Server Name Indication (SNI)”. The alternative “All Clients” costs $600 per month because it requires a dedicated IP version of custom SSL support. The downside to [SNI](https://en.wikipedia.org/wiki/Server_Name_Indication) is that older browsers (4-10 years old) may not properly support TLS and therefore will get a worse experience (no HTTPS) or no experience (if HTTPS-only is specified). To support older browsers, HTTPS-only can be turned off since it is not a requirement, but this will mean that `http://example.com` won’t automatically redirect to `https://example.com`.

<figure class="image--narrow screenshot">
  <img src="{{ page.image[3].src | imgix_url }}" alt="{{ page.image[3].alt }}" />
  <figcaption>
    <p>{{ page.image[3].caption }}</p>
  </figcaption>
</figure>

<figure class="image--narrow screenshot">
  <img src="{{ page.image[4].src | imgix_url }}" alt="{{ page.image[4].alt }}" />
  <figcaption>
    <p>{{ page.image[4].caption }}</p>
  </figcaption>
</figure>

<figure class="image--narrow screenshot">
  <img src="{{ page.image[5].src | imgix_url: w: 720, q: 50 }}" alt="{{ page.image[5].alt }}" />
  <figcaption>
    <p>{{ page.image[5].caption }}</p>
  </figcaption>
</figure>

<figure class="image--half screenshot">
  <img src="{{ page.image[6].src | imgix_url }}" alt="{{ page.image[6].alt }}" />
</figure>

It’s time for another cup of tea because CloudFront will need a bit longer to process after changes are saved. After this, setup should be complete. Make sure the status of the distribution is marked as “deployed” and check whether the `https://` URLs for the site work properly. Done.

---

### Bonus: set `www` URLs to redirect

If `https://example.com` is desired instead of `https://www.example.com`, Route 53 can be set up to automatically redirect these requests. Route 53 treats `www` just like any other subdomain. It is possible to set up an `ALIAS`-type record in the same hosted zone for the `www` domain and forward it to the same CloudFront distribution (with CNAMES for both domains set), but this has the disadvantage of offering no obvious canonical URL for the site. A URL like `www.example.com` would direct to the same exact resource as `example.com` would – but neither would be preferred because neither is set up as canonical. Both for users and search engines, having only a single URL for each unique resource is definitely preferred.

The process is similar to [Step 1 (S3)](#step-1) through Step 2 (CloudFront) and Step 3 (Route 53) applied to a new bucket and distribution prepended with `www`. However, there are a few adjustments. The S3 bucket should be set to **Redirect all requests to another host name** which should be set at the root domain (`example.com`). That bucket can then be wired to a second CloudFront distribution and routed with Route 53, attached to the same certificate exactly as above. Setting up a parallel distribution that uses the S3 bucket’s built-in redirection service results in a single canonical URL.

This process could be mirrored to serve `www` as the canonical URL instead.

---

## Caveat

These are only *my* notes for configuration – there’s a reason I left out the word “you” from this account. I hope that this guide is helpful for anyone working on a similar challenge but I have not covered all of the ways that this process could go wrong. I discovered some of these methods through reading accounts of AWS configuration, some from Amazon’s official documentation, and others from trial and error.

It was completely worth doing and I’d highly recommend it to anyone who is already using AWS to host a static site.

{% capture a3 %}
# Further reading

## Why moving to TLS is important

- [Tim Bray – “Private By Default”](https://www.tbray.org/ongoing/When/201x/2012/12/02/HTTPS)
- [Eric Mill – “We’re Deprecating HTTP And It’s Going To Be Okay”](https://konklone.com/post/were-deprecating-http-and-its-going-to-be-okay)
- [David Kravets – “Comcast Wi-Fi serving self-promotional ads via JavaScript injection” in <i>Ars Technica</i>](http://arstechnica.com/tech-policy/2014/09/why-comcasts-javascript-ad-injections-threaten-security-net-neutrality/)
- [Aaron Gustafson – “More Proof We Don’t Control Our Web Pages”](https://www.aaron-gustafson.com/notebook/more-proof-we-dont-control-our-web-pages/)

## Other accounts on setting up TLS

- [Bryce Fisher-Fleig – “Setting Up SSL on AWS CloudFront and S3” (in 2014 before Amazon offered certificates for free)](https://bryce.fisher-fleig.org/blog/setting-up-ssl-on-aws-cloudfront-and-s3/)
- [Jeff Barr – “AWS Certificate Manager – Deploy SSL/TLS-Based Apps on AWS”](https://aws.amazon.com/blogs/aws/new-aws-certificate-manager-deploy-ssltls-based-apps-on-aws/)
- [Chris Down – “Migrating Jekyll to Amazon S3 and CloudFront”](https://chrisdown.name/2014/10/03/migrating-jekyll-to-s3-cloudfront.html)
- [David Celis – “Easily Publish Your Site to S3 and CloudFront”](https://davidcel.is/posts/publish-your-site-to-s3/)
- [Jeremy Keith – “Switching to https ” (on Apache)](https://adactio.com/articles/7435)

# Credit

Thanks [Mike Lissner](http://michaeljaylissner.com) for helping me look into and fix issues around domain redirecting.
{% endcapture %}

<aside class="endnote">
{{ a3 | markdownify }}
</aside>
