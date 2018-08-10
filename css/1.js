let canvas = document.querySelector('#stage');
let ctx = canvas.getContext('2d');

let time = 0;
let balls = [];
let fireworks = [];
let mouse = { x: 400, y: 600 };

function motion(offset) {
	balls.forEach((item, index) => {
		item.position.x += item.velocity * Math.cos(item.angle) / 1000 * offset;
		item.position.y += item.velocity * Math.sin(item.angle) / 1000 * offset;

		let x1 = item.position.x;
		let y1 = item.position.y;
		let x2 = item.end_position.x;
		let y2 = item.end_position.y;
		let delta = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

		//console.log(delta);

		if (delta > 10) {
			ctx.fillStyle = 'red';
			ctx.beginPath();
			ctx.arc(item.position.x, item.position.y, item.radius, 0, Math.PI * 2);
			ctx.fill();
		} else {
			console.log('boom');
			delete balls.splice(index, 1);

			prepareFireworks(x2, y2);
		}
	})

	fireworks.forEach((ele, index) => {
		ele.life--

		if (ele.life) {
			ele.velocity.x += ele.acceleration.x;
			ele.position.x += ele.velocity.x / 1000 * offset;
			ele.acceleration.y += 1;
			ele.velocity.y += ele.acceleration.y;
			ele.position.y += ele.velocity.y / 1000 * offset;
			ctx.fillStyle = ele.color;
			ctx.beginPath();
			ctx.arc(ele.position.x, ele.position.y, ele.radius, 0, Math.PI * 2);
			ctx.fill();
		} else {
			delete fireworks.splice(index, 1);
		}
	})

}

function render(t) {
	// console.log(t - time) // 間隔
	// ctx.clearRect(0, 0, 800, 600)
	canvas.width = canvas.width;
	motion(t - time);
	time = t;
	// setTimeout(render, 1000 / 60)

	//虛線
	ctx.moveTo(400, 600);
	ctx.setLineDash([5, 15]);
	ctx.lineTo(mouse.x, mouse.y);
	ctx.stroke();

	//準心
	ctx.save();
	ctx.translate(mouse.x, mouse.y);
	ctx.beginPath();
	ctx.fillStyle = "#000";
	ctx.fillText(`${mouse.x},${mouse.y}`, 10, -10);
	for (var i = 0; i < 4; i++) {
		ctx.moveTo(0, 0);
		ctx.lineTo(0, 20);
		ctx.rotate(Math.PI / 2);
	}
	ctx.strokeStyle = "#000";
	ctx.lineWidth = 1;
	ctx.stroke();
	ctx.restore();


	requestAnimationFrame(render);
}

// setInterval(render, 1000 / 60) // 60 FPS
// setTimeout(render, 1000 / 60)
requestAnimationFrame(render);




canvas.addEventListener('mousemove', function (e) {
	mouse = { x: e.offsetX, y: e.offsetY };
})

canvas.addEventListener('click', function (e) {
	mouse = { x: e.offsetX, y: e.offsetY };

	let mx = mouse.x - 400; // 鄰邊
	let my = mouse.y - 600; // 對邊
	// 斜邊 = Math.sqrt(mx * mx + my * my)

	let ball = {
		active: true,
		angle: Math.atan(my / mx),
		position: {
			x: 400,
			y: 600
		},
		velocity: 300,
		radius: 5,
		end_position: {
			x: mouse.x,
			y: mouse.y
		}
	}

	if (mx < 0) {
		ball.velocity *= -1;
	}

	balls.push(ball);

})


function prepareFireworks(x, y) {
	let angle;
	let color = '#' + parseInt(Math.random() * (256 * 256 * 256 - 1)).toString(16);
	for (let i = 0; i < 100; i++) {
		angle = Math.random() * Math.PI * 2
		// color = '#' + parseInt(Math.random() * (256 * 256 * 256 - 1)).toString(16)
		fireworks.push({
			life: 100,
			position: {
				x: x,
				y: y
			},
			velocity: {
				x: 0,
				y: 0
			},
			acceleration: {
				x: Math.cos(angle) * (Math.random() * 10 + 10),
				y: Math.sin(angle) * (Math.random() * 10 + 10)
			},
			radius: 2,
			color: color
		})
	}
}