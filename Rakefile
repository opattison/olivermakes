# Website development and deployment config #

require 'jekyll'
require 's3_website'
require 'image_optim'
# require npm

local_static   = "resources"
local_images   = "resources/images"
local_site     = "_site"
deploy_prod    = "DEPLOY=production"
jekyll_prod    = "JEKYLL_ENV=production"


## "rake serve"
desc "custom Jekyll serve for local development"
task :serve do
  puts "## Concatenating JavaScript ##"
  system "npm run concatenate"
  puts "## Locally serving and watching Jekyll development site ##"
  system "#{jekyll_prod} bundle exec jekyll serve --config _config.yml,_config-dev.yml"
end

## "rake optimize" to optimize a folder of images in image_optim
desc "run a folder of images through image_optim"
task :optimize do
  system "image_optim #{local_images} -r"
  puts "## Images optimized ##"
end

## "rake dev" for development deployment
desc "build and deploy scripts, images and site to development site dev.olivermak.es via s3_website"
task :dev do
  puts "## Concatenating JavaScript ##"
  system "npm run concatenate"
  puts "## Building Jekyll development site ##"
  system "#{jekyll_prod} bundle exec jekyll build --config _config.yml,_config-dev.yml"
  system "s3_website push --site #{local_site}"
  puts "## Deployed development site to S3 ##"
end

## "rake prod" for production deployment
desc "build and deploy scripts, images and site to production site olivermak.es via s3_website"
task :prod do
  puts "## Concatenating and minifying JavaScript ##"
  system "npm run minify"
  puts "## Building Jekyll production site ##"
  system "#{jekyll_prod} bundle exec jekyll build"
  system "#{deploy_prod} s3_website push --site #{local_site}"
  puts "## Deployed production site to S3 ##"
end
