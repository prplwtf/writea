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
        "youtube",
        `youtube.com/@${window.Configuration.Connections.YouTube}`,
        window.Configuration.Connections.YouTube,
        Boolean(window.Configuration.Connections.YouTube || false)
      )}
      ${ConnectionElement(
        "twitter",
        `x.com/${window.Configuration.Connections.Twitter}`,
        window.Configuration.Connections.Twitter,
        Boolean(window.Configuration.Connections.Twitter || false)
      )}
    </div>
    ${FooterElement()}
  `
}