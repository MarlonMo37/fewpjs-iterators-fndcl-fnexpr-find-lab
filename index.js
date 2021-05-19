
function superbowlWin(array) {
    let team = array.find( function(e) { return e.result === "W"})
    return !!team ? team.year : undefined
}