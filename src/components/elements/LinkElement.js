function LinkElement() {
  if(!window.Configuration.Information.Link) return;

  let Link = window.Configuration.Information.Link
    .replace("http://", "")
    .replace("https://", "")
  
  let LinkIcon = "link-45deg"
  let LinkIconSize = 27

  // GitHub
  if(Link.startsWith("github.com/")) {
    LinkIcon = "github"
    LinkIconSize = 21
  } else
  // GitLab
  if(Link.startsWith("gitlab.com/")) {
    LinkIcon = "gitlab"
    LinkIconSize = 21
  } else
  // X
  if(Link.startsWith("x.com/") || Link.startsWith("twitter.com/")) {
    LinkIcon = "twitter-x"
    LinkIconSize = 21
  } else
  // Twitch
  if(Link.startsWith("twitch.tv/")) {
    LinkIcon = "twitch"
    LinkIconSize = 22
  } else
  // Discord
  if(Link.startsWith("discord.com/") || Link.startsWith("discord.gg/")) {
    LinkIcon = "discord"
    LinkIconSize = 22
  }

  return `
    <button class="btn shadow-none px-0 rounded-0 me-3">
      <i
        class="bi bi-${LinkIcon} text-danger-emphasis" style="font-size:${LinkIconSize}px; cursor:pointer;"
        onclick="window.location = 'http://${Link}'"
      ></i>
    </button>
  `
}