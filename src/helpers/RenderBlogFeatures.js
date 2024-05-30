// This renders blog features before everything else is rendered.
function PreRenderBlogFeatures(content) {
  // Render emoji
  let emoji = new EmojiConvertor();
  emoji.img_set = "twitter"
  emoji.img_sets.twitter.path = "./src/vendor/img/twemoji-64/"
  emoji.img_sets.twitter.sheet = "./src/vendor/img/twemoji-64.png"

  content = emoji.replace_unified(content);
  content = emoji.replace_colons(content);

  // Return final output
  return content
}


// This renders blog features after everything else has been rendered.
function PostRenderBlogFeatures(content) {
  // Return final output
  return content
}