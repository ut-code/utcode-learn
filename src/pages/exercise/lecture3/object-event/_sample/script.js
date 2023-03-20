let tanaka = {
  name:"田中",
  scores:{
    math:80,
    science:90
  }
 }

function falsify_data() {
  
  tanaka.scores.math = 100;
  tanaka.scores.science = 100;
  let academicPerformance = document.getElementById("academicPerformance");
  academicPerformance.textContent = `成績:数学...${tanaka.scores.math}点、理科...${tanaka.scores.science}点`

}

let trickbutton = document.getElementById("button");
trickbutton.onclick = falsify_data;

