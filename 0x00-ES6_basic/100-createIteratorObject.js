export default function createIteratorObject(report) {
    const empList = [];
    for (let dprWorkforce of Object.values(report.allEmployees))
    {
        for (let worker of dprWorkforce)
        {
            empList.push(worker)
        };
    };

    return empList;
}
