---
title: 'Jekyll’s cost'
layout: singel
category: 'writing'
tags:
  - 'jekyll'
  - 'publishing'
  - 'web'
date: 2016-03-17 16:30
updated: 2016-03-17 15:24
drafted: 2016-03-17 15:00
unique_id: 2016-03-17:jekyll-cost
description: 'Just how cheap is to host a site with Jekyll? Costs start at $0.'

---

Chatting with [Michael Lee](https://michaelsoolee.com/) about my [previous post on what Jekyll is and why I use it]({% post_url 2016-03-16-consider-jekyll %}), I realized more should be said about how affordable static sites can be. From my own experience, here are some cost estimates for hosting a small site (in US dollars):

- [GitHub Pages](https://pages.github.com): completely **free** (with [fewer Jekyll Ruby plugins allowed](https://pages.github.com/versions/), but enables easier automatic deploying).
- Amazon [S3](https://aws.amazon.com/s3/): starting at **$0.03** to a few dollars per month for higher traffic (rate depends on usage).
- S3 with [Route53](https://aws.amazon.com/route53/) for DNS routing: starting at **$0.53** to a few dollars per month.
- S3, Route53 and [CloudFront](https://aws.amazon.com/cloudfront/): starting at **$0.70** to a few dollars per month. My own site costs around **$1.50** per month with this setup in early 2016.
- [Shared hosting](https://en.wikipedia.org/wiki/Shared_web_hosting_service) cost: estimated **~$5-20** per month (often a bare minimum for a dynamic site).
- [VPS](https://en.wikipedia.org/wiki/Virtual_private_server) or “cloud” hosting cost: variable, but I’ve seen costs as low as **$5** per month (and there is really no upper limit, as with everything virtualized or “cloudy”). One might want to look into an option like this for a dynamic site.

Without advocating for any other particular services (since I haven’t used enough of them myself to report accurately), there are a wide variety of [other deployment options](https://jekyllrb.com/docs/deployment-methods/), since Jekyll does not have specific requirements for serving. As always, it depends on your need. But if your needs are minimal, static sites are very cheap to run.

I chose S3 with Route53 and CloudFront for flexibility in deployment (like setting up [secure TLS with a fast CloudFront CDN](https://olivermak.es/2016/01/aws-tls-certificate-with-jekyll/)).
