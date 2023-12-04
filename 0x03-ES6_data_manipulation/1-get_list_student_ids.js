

export default function getListStudentIds(array) {
    let IDarr = [];

    if (Array.isArray(array))
        IDarr = array.map(x => x.id);
    
    return IDarr
}
