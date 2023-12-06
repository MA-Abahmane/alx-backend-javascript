
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}


class Director implements DirectorInterface {
    workFromHome(): string {
        return 'workFromHome'
    }

    getCoffeeBreak(): string {
        return 'getCoffeeBreak'
    }

    workDirectorTasks(): string {
        return 'workDirectorTasks'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'workFromHome'
    }

    getCoffeeBreak(): string {
        return 'getCoffeeBreak'
    }

    workTeacherTasks(): string {
        return 'workTeacherTasks'
    }
}


function createEmployee(salary: string | number): Teacher | Director {
    if (typeof salary == 'number' && salary < 500)
        return new Teacher()
    return new Director()
}

console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director


function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined; 
}

function executeWork(employee: Teacher | Director) {
    if (isDirector(employee))
        employee.workDirectorTasks()
    else
        employee.workTeacherTasks()
}


type Subjects = 'Math' | 'History'
function teachClass(todayClass: Subjects): string {
    if (Subjects === 'Math')
        return 'Teaching Math'
    else if (Subjects === 'History')
        return 'Teaching History'
    else
        return 'No Teaching'
}

teachClass('Math');
//Teaching Math
teachClass('History');
//Teaching History
