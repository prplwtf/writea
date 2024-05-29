var IsAnimating = false

function ProgressBar(length, duration) {
  if(IsAnimating) return;

  ProgressBarElement.style.opacity = 1
  IsAnimating = true

  if(length == 100) {
    ProgressBarElement.style.width = length+"%"
    ProgressBarElement.style.left = length+"%"
    setTimeout(() => {
      ProgressBarElement.style = "width: 0%; opacity: 0; --TransitionWidthDuration: 0s; --TransitionLeftDuration: 0s;"
      setTimeout(() => {
        ProgressBarElement.style = "width: 0%;"
        IsAnimating = false
      }, 50);
    }, 810);
    return;
  }

  ProgressBarElement.style = `width: ${length}%; --TransitionWidthDuration: ${duration || 0.4}s;`

  IsAnimating = false
}