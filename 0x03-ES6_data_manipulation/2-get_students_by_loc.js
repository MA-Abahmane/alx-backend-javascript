

export default function getStudentsByLocation(listStudents, city) {
    let cmnCity = []

    cmnCity = listStudents.filter(student => student.location === city)

    return cmnCity
}