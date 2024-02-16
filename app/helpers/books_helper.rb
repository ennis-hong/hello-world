# frozen_string_literal: true

module BooksHelper
  def show_wrap(target)
    target.split("\n").join("<br>").html_safe
  end

  def show_cover(book, size)
    return image_tag book.cover.variant(resize_to_limit: [size, size]),class:'rounded mx-auto d-block' if book.cover.attached?
    image_tag 'default_img.webp', class: 'img_thumb'
  end
end
