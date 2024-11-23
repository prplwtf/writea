function RootSection() {
  return `
    ${NavigationBarElement()}
    <p writea="root.description">
      ${window.Configuration.Information.Description || "no description provided"}
    </p>
    <div writea="root.connections" class="row">
      ${ConnectionElement(
        "github",
        `github.com/${window.Configuration.Connections.GitHub}`,
        window.Configuration.Connections.GitHub,
        Boolean(window.Configuration.Connections.GitHub || false)
      )}
      ${ConnectionElement(
        "gitlab",
        `gitlab.com/${window.Configuration.Connections.GitLab}`,
        window.Configuration.Connections.GitLab,
        Boolean(window.Configuration.Connections.GitLab || false)
      )}
      ${ConnectionElement(
        "custom:bluesky",
        `bsky.app/profile/${window.Configuration.Connections.Bluesky}`,
        window.Configuration.Connections.Bluesky,
        Boolean(window.Configuration.Connections.Bluesky || false)
      )}
      ${ConnectionElement(
        "twitter",
        `x.com/${window.Configuration.Connections.Twitter}`,
        window.Configuration.Connections.Twitter,
        Boolean(window.Configuration.Connections.Twitter || false)
      )}
      ${ConnectionElement(
        "mastodon",
        `mastodon.social/@${window.Configuration.Connections.Mastodon}`,
        window.Configuration.Connections.Mastodon,
        Boolean(window.Configuration.Connections.Mastodon || false)
      )}
      ${ConnectionElement(
        "medium",
        `medium.com/@${window.Configuration.Connections.Medium}`,
        window.Configuration.Connections.Medium,
        Boolean(window.Configuration.Connections.Medium || false)
      )}
      ${ConnectionElement(
        "twitch",
        `twitch.tv/${window.Configuration.Connections.Twitch}`,
        window.Configuration.Connections.Twitch,
        Boolean(window.Configuration.Connections.Twitch || false)
      )}
      ${ConnectionElement(
        "youtube",
        `youtube.com/@${window.Configuration.Connections.YouTube}`,
        window.Configuration.Connections.YouTube,
        Boolean(window.Configuration.Connections.YouTube || false)
      )}
    </div>
    ${FooterElement()}
  `
}
