sap.ui.define(["com/ks/test/zten_unit_Test/util/formatter"], function(formatter) {
	"use strict";

	QUnit.module("Module name", {

		beforeEach: function() {

		},

		afterEach: function() {

		}
	});

	QUnit.test("Should get the test wangmo", function(assert) {
		//system under test
		var t1 = formatter.forTest();
		assert.strictEqual(t1, 'wangmo', "testing text return");
	});

	QUnit.test("Should get the test wangmo", function(assert) {
		//system under test
		var t1 = formatter.getState(2);
		assert.strictEqual(t1, "Warning", "testing state passed");
	});
});