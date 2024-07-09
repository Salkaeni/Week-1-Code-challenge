function calculateGrade (mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if ( mark >= 50) {
        return 'C'
    }else if ( mark >=40) {
        return 'D'
    } else {
        return 'E'
    }
}

function studentGradeGenerator () {
    let mark = prompt("Enter student's mark (between 0 and 100):");
    mark = parseFloat(mark);
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        let grade = calculateGrade(mark);
        console.log('The grade for mark ${mark} is: ${grade}');
    } else {
        console.log ("Please enter a valid mark between 0 and 100.");
    }
}