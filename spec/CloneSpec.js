describe("The clone of an object", function() {
	it("is not the same object", function() {
		var obj = {};
		expect(Clone.clone(obj)).not.toBe(obj);
	});
	it("contains the same attributes", function() {
		var obj = { a: {} };
		expect(Clone.clone(obj).a).toBe(obj.a);
	});
});
