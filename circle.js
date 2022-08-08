
function circleArea (r) {
    const area = Math.PI * r * r;
    console.log("Circle Area : " + area);
}

function circleCircumference (r) {
    const circumference = Math.PI * 2 * r;
    console.log("Circle Circumference : " + circumference); 
}


module.exports = {
    circleArea,
    circleCircumference
}