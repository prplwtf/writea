async function ImportElements() {
  const Elements = [
		{ Identifier: "NavigationBarElement", Path: "NavigationBarElement.js" },
		{ Identifier: "FooterElement", Path: "FooterElement.js" },
		{ Identifier: "LinkElement", Path: "LinkElement.js" },
		{ Identifier: "ConnectionElement", Path: "ConnectionElement.js" },
	]

  for (let i = Elements.length - 1; i >= 0; i--) {
    const Element = Elements[i]
    Import("./src/components/elements/" + Element.Path, Element.Identifier)
  }

  return;
}