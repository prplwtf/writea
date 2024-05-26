function BlogSection() {
  return `
    ${NavigationBarElement()}
    <p>
      blog section
      ${BlogListSection()}
    </p>
    ${FooterElement()}
  `
}