export default function createIteratorObject(report) {
  const empList = [];
  for (const dprWorkforce of Object.values(report.allEmployees)) {
    for (const worker of dprWorkforce) {
      empList.push(worker);
    }
  }

  return empList;
}
