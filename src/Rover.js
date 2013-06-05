function Rover(board, x, y, dir) {
	this.board = board;
	this.x = x;
	this.y = y;
	this.dir = dir;
	this.board.normalize(this);
}

Rover.NORTH = 0;
Rover.EAST = 1;
Rover.SOUTH = 2;
Rover.WEST = 3;

Rover.sin = function(x) {
	return ((x - 6) * x + 8) * x / 3;
};

Rover.cos = function(x) {
	return (((x - 3) * x - 1) * x + 3) / 3;
};

Rover.prototype._move = function(forward) {
	var factor = forward ? 1 : -1;
	this.x += factor * Rover.sin(this.dir);
	this.y += factor * Rover.cos(this.dir);
	this.board.normalize(this);
};

Rover.prototype.forward = function() {
	this._move(true);
};

Rover.prototype.backward = function() {
	this._move(false);
};

Rover.prototype.left = function() {
	this.dir = (this.dir + 3) % 4;
};

Rover.prototype.right = function() {
	this.dir = (this.dir + 1) % 4;
};
