## Website deploying config ##

# Assumes that Jekyll gem is configured for site.
# Assumes that S3_website gem is configured.
# Assumes that ImageOptim and ImageOptim-CLI are installed.

local_images   = "_static" # typically called "_images"
local_site     = "_site" # typically called "_site"

## "rake optimize" to optimize a folder of images in ImageOptim-CLI
desc "run a folder of images through ImageOptim-CLI"
task :optimize do
  system "imageoptim -d #{local_images}/"
  puts "## Images optimized ##"
end

## "rake load" to load images in the local image directory to the server
desc "deploy Jekyll images to remote server via s3_website"
task :load do
    system "s3_website push --site #{local_images} --config-dir #{local_images}"
    puts "## Deployed images to S3 ##"
end

## "rake deploy" to deploy _site to the server
desc "build and deploy Jekyll _site and _images to remote servers via s3_website"
task :deploy => :load do
  system "jekyll build"
  system "s3_website push --site #{local_site}"
  puts "## Deployed site to S3 ##"
end


def get_stdin(message)
  print message
  STDIN.gets.chomp
end