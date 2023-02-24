function calc(acd, aspd, cd) {
  var filler = document.querySelector(".filler");
  var filler2 = document.querySelector(".filler2");
  let attacksPerSecond = 50 / (200 - aspd.value);
  let attackDelay = 1 / attacksPerSecond.toFixed(2);
  if (cd.value == 0 || cd.value == null) {
    let percentage = ((attackDelay.toFixed(2) - acd.value) / acd.value) * 100;
    percentage = parseInt(percentage) * -1;
    filler.innerHTML =
      "You will need " +
      percentage +
      "% ACD reduction to spam a skill with " +
      acd.value +
      "s Skill Delay at " +
      aspd.value +
      " ASPD";
    filler2.innerHTML =
      "You will be able to spam the skill at " +
      parseInt(attacksPerSecond).toFixed(2) +
      " attacks per second";
  } else if (cd.value > 0) {
    let percentage = ((cd.value - acd.value) / acd.value) * 100;
    percentage = parseInt(percentage) * -1;
    filler.innerHTML =
      "You will need " +
      percentage +
      "% ACD reduction to spam a skill with " +
      acd.value +
      "s Skill Delay and " +
      cd.value +
      "s Cooldown at " +
      aspd.value +
      " ASPD";
    filler2.innerHTML =
      "You will be able to spam the skill at " +
      (1 / cd.value).toFixed(2) +
      " attacks per second";
  }
}
