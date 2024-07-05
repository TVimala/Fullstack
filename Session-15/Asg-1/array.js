let marks = [23, 98, 99, 40, 100];
function display(marksArray) {
    return marksArray.reduce((acc,curr) =>acc+curr,0);
}
module.exports={marks,display};
