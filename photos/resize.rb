#!/Users/sunfjun/.rvm/rubies/ree-1.8.7-2010.02/bin/ruby -w

def resizeimages name, filename
  # img = Magick::Image::read(name).first  
  # 
  # img.resize_to_fill!(150)  
  #   
  # 
  # 
  # img.write("thumbs/#{File.basename(name)}"){ self.quality = 95; self.density = 92; }
  # 

thumbs_path = "thumbs/#{filename}"
images_path = "images/#{filename}"

name = name.gsub(/ /, '\ ')


puts "<img src='thumbs/#{filename}' alt='images/#{filename}' title='Europe'/>"

system "convert -resize '300x200>' -strip -quality 75% #{name} #{thumbs_path}"
system "convert -strip -quality 75% #{name} #{images_path}"

end
count = 0
Dir['imagess/*'].map do |file|
  count += 1
  filename = "#{count}.jpg"
  resizeimages file, filename
end






exit
