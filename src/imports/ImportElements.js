async function ImportElements() {
  const Elements = [
		{ Identifier: "NavigationBarElement", Path: "NavigationBarElement.js" }
	]

  for (let i = Elements.length - 1; i >= 0; i--) {
    const Element = Elements[i]
    Import("./src/components/elements/" + Element.Path, Element.Identifier)
  }

  return;
}