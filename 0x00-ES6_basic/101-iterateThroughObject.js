export default function iterateThroughObject(reportWithIterator) {
    let str = '', flag = 0

    for (let nm of reportWithIterator)
    {
        if (flag != 0) {
            str += ' | ';
        }
        str += nm
        flag++;
    }

    return str
}