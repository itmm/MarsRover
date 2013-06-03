function Parser(board, rover) {
	this.board = board;
	this.rover = rover;
	this.foundObstacle = false;
}

Parser.prototype.doUndoableMovement = function(action, undo) {
	this.rover[action]();
	if (this.board.hasObstacle(this.rover.pos)) {
		this.foundObstacle = true;
		this.rover[undo]();
	}
}
Parser.prototype.parse = function(cmds) {
	cmds = cmds.toLowerCase();
	for (var l = cmds.length, i = 0; !this.foundObstacle && i < l; ++i) {
		var ch = cmds.substr(i, 1);
		switch (ch) {
			case 'f': this.doUndoableMovement('forward', 'backward'); break;
			case 'b': this.doUndoableMovement('backward', 'forward'); break;
			case 'l': this.rover.left(); break;
			case 'r': this.rover.right(); break;
		}
	}
	return this.rover.pos;
}
