export {}

interface Point{
	x:number,
	y:number
}

function drawPoint(point:Point) {
	console.log(point.x, point.y);

}

drawPoint({
	x:1,
	y:2,
	z:3
})