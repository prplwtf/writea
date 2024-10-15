function ConnectionElement(Icon, Link, Username, Defined) {
  if(!Defined) return ""

  return `
  <div writea="element.connection" class="col py-2">
    <a href="https://${Link}" class="text-decoration-none">
        <div
          class="border border-dark border-opacity-25 py-2 px-3 rounded-4 position-relative" 
          style="
            --mdc-ripple-hover-opacity: .02;
            --mdc-ripple-focus-opacity: .02;
            --mdc-ripple-press-opacity: .05;
          "
        >
          <p class="text-truncate my-1 text-body">
            <i class="bi bi-${Icon} pe-1"></i>
            <span class="opacity-50">
              ${Username}
            </span>
          </p>
          <span class="ripple-surface"></span>
        </div>
      </a>
    </div>
  `
}