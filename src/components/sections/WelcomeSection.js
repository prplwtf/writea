function WelcomeSection() {
  return `
    <div class="border border-dark py-2 px-3 rounded-4 bg-dark-subtle">
      <p class="mt-1 mb-2 text-dark-emphasis">
        <b>Gravity was unable to fetch your configuration file</b> because it was either missing, corrupt, blocked or unavailable.
      </p>
    </div>

    <p class="h4 pt-3 mt-4">
      Welcome to <b class="text-primary-emphasis">gravity</b>
      <i class="bi bi-stars text-primary-emphasis"></i>!
    </p>
    <p class="mb-4 pb-3">Let's start configurating <b>gravity</b> to your needs and get you up and running in no time.</p>

    <i class="bi bi-1-circle-fill h5"></i>
    <p class="mt-2">
      Head over to your <code class="text-dark">configuration/</code> directory and copy (or rename) the example configuration file
      and adjust it to your liking.
    </p>
    <div class="row mb-4 pb-3">
      <div class="col-6">
        <div class="bg-dark-subtle rounded-4 py-2 px-3">
          <p class="m-0 text-center">
            <code class="text-dark">
              Configuration.example.yml
            </code>
          </p>
        </div>
      </div>
      <div class="col-1" style="margin-top: 5px;">
        <i class="bi bi-arrow-right h4"></i>
      </div>
      <div class="col-5">
        <div class="bg-dark-subtle rounded-4 py-2 px-3">
          <p class="m-0 text-center">
            <code class="text-primary-emphasis">
              Configuration.yml
            </code>
          </p>
        </div>
      </div>
    </div>

    <i class="bi bi-2-circle-fill h5"></i>
    <p class="mt-2">
      <b>Save/push your changes</b> and <b>refresh this page</b>!
      If you did everything correctly, your blog should be up and running.
    </p>
  `
}