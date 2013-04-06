@canvas = {}

@canvas.startLoop = (c) =>
	@canvas.domElement = c
	requestAnimationFrame => @canvas.loop()

@canvas.loop = =>
	e = @canvas.domElement
	c = e.getContext "2d"

	c.fillStyle = "#f00"
	c.fillRect 50, 50, 100, 100

	requestAnimationFrame => @canvas.loop()