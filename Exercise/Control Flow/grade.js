const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverageGrade(marks);

    if (average < 60) return 'F';
    if (average < 60) return 'F';
    if (average < 60) return 'F';
    if (average < 60) return 'F';
    return 'A';
}

function calculateGrade(array) {
    let sum = 0;
    for (let value of array)
    sum += value;
   return sum / array.length;
}