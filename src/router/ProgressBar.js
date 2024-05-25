var IsAnimating = false

function ProgressBar(length) {
  if(IsAnimating) return;

  ProgressBarElement.style.opacity = 1
  IsAnimating = true

  if(length == 100) {
    ProgressBarElement.style.width = length+"%"
    ProgressBarElement.style.left = length+"%"
    setTimeout(() => {
      ProgressBarElement.style.opacity = 0
      ProgressBarElement.style.width = 0
      ProgressBarElement.style.left = 0
    }, 1000);
    setTimeout(() => {
      IsAnimating = false
    }, 2000)
    return;
  }

  ProgressBarElement.style.width = length+"%"
  IsAnimating = false
}