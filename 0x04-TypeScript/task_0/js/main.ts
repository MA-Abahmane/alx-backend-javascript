
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Ali',
    lastName: 'Abitalib',
    age: 25,
    location: 'SA',
};
const student2: Student = {
    firstName: 'Sakura',
    lastName: 'Arthur',
    age: 27,
    location: 'somewhere',
};

let studentsList: Student[] = [student1, student2]


document.addEventListener('DOMContentLoaded', () =>{
    let table = document.getElementById('Stab') as HTMLTableElement

    studentsList.forEach((student) => {
        const row = table.insertRow()

        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)

        cell1.textContent = student.firstName
        cell2.textContent = student.location
    })
})
