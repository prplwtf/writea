function ConnectionElement(Icon, Link, Username, Defined) {
  if(!Defined) return ""

  return `
    <div class="col py-2" onclick="window.location='https://${Link}'">
      <div
        class="border border-dark border-opacity-25 py-2 px-3 rounded-4 position-relative" 
        style="
          cursor: pointer;
          --mdc-ripple-hover-opacity: .02;
          --mdc-ripple-focus-opacity: .02;
          --mdc-ripple-press-opacity: .05;
        "
      >
        <p class="text-truncate my-1">
          <i class="bi bi-${Icon} pe-1"></i>
          <span class="opacity-50">
            ${Username}
          </span>
        </p>
        <span class="ripple-surface"></span>
      </div>
    </div>
  `
}