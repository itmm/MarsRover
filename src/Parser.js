function Parser(board, rover) {
	this.board = board;
	this.rover = rover;
	this.foundObstacle = false;
}

Parser.prototype._doUndoableMovement = function(action, undo) {
	this.rover[action]();
	if (this.board.hasObstacle(this.rover)) {
		this.rover[undo]();
		return true;
	}
	return false;
};

Parser.prototype.parse = function(cmds) {
	cmds = cmds.toLowerCase();
	for (var l = cmds.length, i = 0; !this.foundObstacle && i < l; ++i) {
		switch (cmds.charAt(i)) {
			case 'f': this.foundObstacle = this._doUndoableMovement('forward', 'backward'); break;
			case 'b': this.foundObstacle = this._doUndoableMovement('backward', 'forward'); break;
			case 'l': this.rover.left(); break;
			case 'r': this.rover.right(); break;
		}
	}
	return this.rover;
};
