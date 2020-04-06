const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gaugeElement, value) {
  if (value < 0 || value > 1) {
    return;
  }
  gaugeElement.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gaugeElement.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}%`;
}
setGaugeValue(gaugeElement, 0.43);
