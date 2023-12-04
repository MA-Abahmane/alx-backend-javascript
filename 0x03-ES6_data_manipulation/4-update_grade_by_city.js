/**
 *    In this version, the map function is used to create a new array of students with updated
 *  grades. The find method is used to find the matching grade object based on the student's id.
 *  If a matching grade is found, its value is used; otherwise, the default value 'N/A' is used.
 *  Finally, filter is applied to include only the students from the specified city.
 */

export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade:
        (newGrades.find((grade) => grade.studentId === student.id) || {}).grade || 'N/A',
    }));
}
