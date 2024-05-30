function RenderBlogFeatures(content) {
  let output = content

  // render emojis
  let emoji = new EmojiConvertor();
  emoji.img_set = "twitter"
  emoji.img_sets.twitter.path = "./src/vendor/img/twemoji-64/"
  emoji.img_sets.twitter.sheet = "./src/vendor/img/twemoji-64.png"

  output = emoji.replace_unified(content);
  output = emoji.replace_colons(content);

  // return output
  return output
}