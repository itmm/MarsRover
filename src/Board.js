function Board(bounds) {
	this.minX = bounds.minX;
	this.width = bounds.maxX - this.minX + 1;
	this.minY = bounds.minY;
	this.height = bounds.maxY - this.minY + 1;
	this.obstacles = {};
}

Board.normalizeOne = function(val, min, size) {
	val -= min;
	val = val % size;
	if (val < 0) { val += size; }
	val += min;
	return val;
}

Board.prototype.normalize = function(pos) {
	var result = Clone.clone(pos);
	result.x = Board.normalizeOne(pos.x, this.minX, this.width);
	result.y = Board.normalizeOne(pos.y, this.minY, this.height);
	return result;
}

Board.toKey = function(pos) {
	return pos.x + ";" + pos.y;
}

Board.prototype.hasObstacle = function(pos) {
	return this.obstacles[Board.toKey(pos)] || false;
}

Board.prototype.addObstacle = function(pos) {
	this.obstacles[Board.toKey(this.normalize(pos))] = true;
}