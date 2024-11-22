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
            ${!Icon.startsWith("custom:") ? `
              <i class="bi bi-${Icon} pe-1"></i>
            ` : `
              <span class="pe-1">
                ${Icon == "custom:bluesky" ? `
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" class="mt-0">
                    <path fill="currentColor" d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
                  </svg>
                ` : ``}
              </span>
            `}
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