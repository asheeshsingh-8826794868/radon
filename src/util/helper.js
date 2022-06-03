const printDate=function(){
    console.log(new Date())
}
const printMonth=function(){
    const month=["january","february","march","april","may","jun","july","august","september","october","november","december"]
    const d=new Date();
    let name=month[d.getMonth()];
    console.log(name)
}

const getBatchInfo=function(){
    console.log("Radon,WeekDay3,The topic being taught today is node.js,module,route etc")
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo