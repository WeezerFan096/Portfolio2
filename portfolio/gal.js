function updateSliderValue() {
    var slider = document.getElementById("slider");
    var sliderValueElement = document.getElementById("sliderValue");
    var percent = slider.value + "%";
    sliderValueElement.textContent = percent;
  }