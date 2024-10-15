function MissingConfigurationElement(OldConfiguration, NewConfiguration) {
  return `
    <div writea="element.missingconfig" class="row pb-4">
      <div class="col-6">
        <div class="bg-dark-subtle rounded-4 py-2 px-3">
          <p class="m-0 text-center">
            <code class="text-dark">
              ${OldConfiguration}
            </code>
          </p>
        </div>
      </div>
      <div class="col-1" style="margin-top: 5px;">
        <i class="bi bi-arrow-right h4 text-primary-emphasis"></i>
      </div>
      <div class="col-5">
        <div class="bg-dark-subtle rounded-4 py-2 px-3">
          <p class="m-0 text-center">
            <code class="text-primary-emphasis">
              ${NewConfiguration}
            </code>
          </p>
        </div>
      </div>
    </div>
  `
}