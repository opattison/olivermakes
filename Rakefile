require 'stringex'

## Website deploying config ##

# Assumes that S3_website gem is configured.
# Assumes that ImageOptim and ImageOptim-CLI are installed.

local_images   = "_static" # typically called "_images"
local_site     = "_site" # typically called "_site"

include_images = "--include='*.png' --include='*.jpg' --include='*/' --exclude='*'"

## "rake post" to generate a new post with front matter
### borrowed most of the code from Octopress https://github.com/imathis/octopress/blob/master/Rakefile
task :post do
  title = get_stdin("Enter a title for your post: ")
  if title == ""
    title = "New Post"
  end
  filename = "_posts/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.md"
  photo = get_stdin("Making a photo post? y or n? ")
  if photo == "y"
    open(filename, 'w') do |post|
      post.puts "---"
      post.puts "layout: photo"
      post.puts "category: photo"
      post.puts "title: \'#{title.gsub(/&/,'&amp;')}\'"
      post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
      post.puts ""
      post.puts "---"
      post.puts ""
    end
  else
    open(filename, 'w') do |post|
      post.puts "---"
      post.puts "layout: page"
      post.puts "category: writing"
      post.puts "title: \'#{title.gsub(/&/,'&amp;')}\'"
      post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
      post.puts "excerpt: \'\'"
      post.puts ""
      post.puts "---"
      post.puts ""
    end
  end
  puts "Created new post: #{filename}"
end

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
desc "deploy Jekyll _site and _images to remote servers via s3_website"
task :deploy => :load do
  system "s3_website push --site #{local_site}"
  puts "## Deployed site to S3 ##"
end


def get_stdin(message)
  print message
  STDIN.gets.chomp
end