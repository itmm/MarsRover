function Board(bounds) {
	this.minX = bounds.minX;
	this.width = bounds.maxX - this.minX + 1;
	this.minY = bounds.minY;
	this.height = bounds.maxY - this.minY + 1;
	this.obstacles = {};
}

Board._normalizeOne = function(val, min, size) {
	val -= min;
	val = val % size;
	if (val < 0) { val += size; }
	val += min;
	return val;
};

Board.prototype.normalize = function(pos) {
	pos.x = Board._normalizeOne(pos.x, this.minX, this.width);
	pos.y = Board._normalizeOne(pos.y, this.minY, this.height);
};

Board.prototype._toKey = function(pos) {
	this.normalize(pos);
	return pos.x + ";" + pos.y;
};

Board.prototype.hasObstacle = function(pos) {
	return this.obstacles[this._toKey(pos)] || false;
};

Board.prototype.addObstacle = function(pos) {
	this.obstacles[this._toKey(pos)] = true;
};
