function defaultParser() {
	var defaults = defaultRover();
	defaults.parser = new Parser(defaults.board, defaults.rover);
	return defaults;
}

describe("A Parser", function() {
	var defaults; 
	beforeEach(function() {
		defaults = defaultParser();
	});
	it("can move and rotate", function() {
		expect(extractPos(defaults.parser.parse("frflb"))).toEqual({x: 1, y: 0, dir: Rover.NORTH});
	});
	it("can be asked for obstacles on the way", function() {
		expect(defaults.parser.foundObstacle).toBe(false);
	});
	it("will stop if it is about to run in an obstacle", function() {
		defaults.board.addObstacle({x: 1, y: 1});
		expect(extractPos(defaults.parser.parse("frflb"))).toEqual({x: 0, y: 1, dir: Rover.EAST});
	});
	it("can be queried, if an obstacle was found", function() {
		defaults.board.addObstacle({x: 1, y: 1});
		defaults.parser.parse("frflb");
		expect(defaults.parser.foundObstacle).toBe(true);
	});
});
