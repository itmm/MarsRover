function defaultBoard() {
	var defaults = {};
	defaults.bounds = {minX: -7, maxX: 11, minY: -3, maxY: 5};
	defaults.board = new Board(defaults.bounds);
	return defaults;
}

describe("A Game board", function() {
	var defaults;
	beforeEach(function() {
		defaults = defaultBoard();
	});
	it("doesn't change values in range", function() {
		var pos = {x: defaults.bounds.minX, y: defaults.bounds.maxY};
		defaults.board.normalize(pos);
		var expected = {x: pos.x, y: pos.y};
		expect(pos).toEqual(expected);
	});
	it("maps overflow in range", function() {
		var pos = {x: defaults.bounds.minX - 2, y: defaults.bounds.maxY + 2};
		var expected = {x: defaults.bounds.maxX - 1, y: defaults.bounds.minY + 1};
		defaults.board.normalize(pos);
		expect(pos).toEqual(expected);
	});
	it("has no default abstacles", function() {
		expect(defaults.board.hasObstacle({x: 0, y: 0})).toBe(false);
	});
	it("can have obstacles", function() {
		defaults.board.addObstacle({x: 0, y: 0});
		expect(defaults.board.hasObstacle({x: 0, y: 0})).toBe(true);
	});
	it("can have unnormalized obstacles", function() {
		defaults.board.addObstacle({x: defaults.bounds.maxX + 1, y: defaults.bounds.minY});
		expect(defaults.board.hasObstacle({x: defaults.bounds.minX, y: defaults.bounds.maxX + 1}));
	});
});
