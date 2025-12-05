window.alert("A continuacion debera ingresar 3 notas por alumno para calcular el promedio final del curso. Las ponderaciones para nota1, nota2 y nota3 son 25%, 35% y 40%.");

let cantidad = parseFloat(window.prompt("Ingrese la cantidad de alumnos en el curso:"));

let notasCurso = 0;

for (let i = 0; i < cantidad; i++) {

    let contadorAlumno = i + 1;

    let nota1 = parseFloat(prompt("Para Alumno " + contadorAlumno + ", ingrese nota1:"));
    let nota2 = parseFloat(prompt("Para Alumno " + contadorAlumno + ", ingrese nota2:"));
    let nota3 = parseFloat(prompt("Para Alumno " + contadorAlumno + ", ingrese nota3:"));

    let promedioAlumno = (nota1 * 0.25) + (nota2 * 0.35) + (nota3 * 0.40);

    notasCurso += promedioAlumno;
}

let promedioCurso = notasCurso / cantidad;

document.write("El promedio final del curso es: " + promedioCurso.toFixed(2));
