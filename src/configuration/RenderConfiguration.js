async function RenderConfiguration() {
  // Render values
  AppTitle.innerHTML = window.Configuration.Information.Title || "writea"

  // Apply active theme
  let ActiveTheme = './themes/'+(window.Configuration.Information.Theme || "Default")+'.css'
  AppTheme.innerHTML = `@import url('${ActiveTheme}')`
  let ComputedThemeConfig = getComputedStyle(document.querySelector("writea-theme-config"))
  var ThemeConfig = {
    "themeColor": ComputedThemeConfig.getPropertyValue('--theme-color')
  }
  AppColor.content = ThemeConfig.themeColor || "#E87C86"
  return;
}