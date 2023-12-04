export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((sum, val) => (sum + val.id), 0);
}
