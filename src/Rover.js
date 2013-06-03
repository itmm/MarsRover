function Rover(board, pos) {
	this.board = board;
	this.pos = this.board.normalize(pos);
}

Rover.NORTH = 0;
Rover.EAST = 1;
Rover.SOUTH = 2;
Rover.WEST = 3;

Rover.sin = function(pos) {
	return ((pos - 6) * pos + 8) * pos / 3;
}

Rover.cos = function(pos) {
	return (((pos - 3) * pos - 1) * pos + 3) / 3;
}

Rover.prototype.move = function(forward) {
	var factor = forward ? 1 : -1;
	var dir = this.pos.dir;
	this.pos.x += factor * Rover.sin(dir);
	this.pos.y += factor * Rover.cos(dir);
	this.pos = this.board.normalize(this.pos);
}

Rover.prototype.forward = function() {
	this.move(true);
}

Rover.prototype.backward = function() {
	this.move(false);
}

Rover.prototype.left = function() {
	this.pos.dir = (this.pos.dir + 3) % 4;
}

Rover.prototype.right = function() {
	this.pos.dir = (this.pos.dir + 1) % 4;
}