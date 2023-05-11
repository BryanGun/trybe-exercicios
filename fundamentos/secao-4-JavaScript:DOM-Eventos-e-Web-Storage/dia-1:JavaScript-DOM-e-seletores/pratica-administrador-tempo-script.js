//Cabecalho
document.getElementById("header-container").style.backgroundColor = "rgb(0, 176, 105)";

//Body
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "rgb(255, 159, 132)";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "rgb(249, 219, 94)";


const percorreEmergencyTasks = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < percorreEmergencyTasks.length; index++) {
percorreEmergencyTasks[index].style.backgroundColor = "rgb(165, 0, 243)";
}

const percorreNoEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < percorreNoEmergencyTasks.length; index++) {
percorreNoEmergencyTasks[index].style.backgroundColor = "rgb(35, 37, 37)";
}

//Paleta de cores:

//rgb(0, 176, 105)
//rgb(165, 0, 243)
//rgb(249, 219, 94)
//rgb(35, 37, 37)
//rgb(0, 53, 51)

//Rodape

document.getElementById("footer-container").style.backgroundColor = "rgb(0, 53, 51)";