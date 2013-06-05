function defaultRover() {
	var defaults = defaultBoard();
	defaults.pos = {x: 0, y: 0, dir: Rover.NORTH};
	defaults.rover = new Rover(defaults.board, defaults.pos.x, defaults.pos.y, defaults.pos.dir);
	return defaults;
}

describe("A Rovers position", function() {
	var defaults;
	beforeEach(function() {
		defaults = defaultRover();
	});
	it("starts at origin position", function() {
		expect(defaults.rover.pos()).toEqual(defaults.pos);
	});
	it("starts at different position", function() {
		var newPos = {x: 1, y: -2, dir: Rover.EAST};
		var rover = new Rover(defaults.board, newPos.x, newPos.y, newPos.dir);
		expect(rover.pos()).toEqual(newPos);
	});
});

describe("The sin function", function() {
	it("is 0 when heading North", function() {
		expect(Rover.sin(Rover.NORTH)).toBe(0);
	});
	it("is 1 when heading East", function() {
		expect(Rover.sin(Rover.EAST)).toBe(1);
	});
	it("is 0 when heading South", function() {
		expect(Rover.sin(Rover.SOUTH)).toBe(0);
	});
	it("is -1 when heading West", function() {
		expect(Rover.sin(Rover.WEST)).toBe(-1);
	});
});

describe("The cos function", function() {
	it("is 1 when heading North", function() {
		expect(Rover.cos(Rover.NORTH)).toBe(1);
	});
	it("is 0 when heading East", function() {
		expect(Rover.cos(Rover.EAST)).toBe(0);
	});
	it("is -1 when heading South", function() {
		expect(Rover.cos(Rover.SOUTH)).toBe(-1);
	});
	it("is 0 when heading West", function() {
		expect(Rover.cos(Rover.WEST)).toBe(0);
	});
});

describe("A Rover", function() {
	var defaults;
	beforeEach(function() {
		defaults = defaultRover();
	});
	it("can move forward", function() {
		defaults.rover.forward();
		expect(defaults.rover.pos()).toEqual({x: 0, y: 1, dir: Rover.NORTH});
	});
	it("can move backward", function() {
		defaults.rover.backward();
		expect(defaults.rover.pos()).toEqual({x: 0, y: -1, dir: Rover.NORTH});
	})
	it("can rotate left", function() {
		defaults.rover.left();
		expect(defaults.rover.pos()).toEqual({x: 0, y: 0, dir: Rover.WEST});
	});
	it("can rotate right", function() {
		defaults.rover.right();
		expect(defaults.rover.pos()).toEqual({x: 0, y: 0, dir: Rover.EAST});
	});
	it("can move to left", function() {
		defaults.rover.left();
		defaults.rover.forward();
		expect(defaults.rover.pos()).toEqual({x: -1, y: 0, dir: Rover.WEST});
	});
});