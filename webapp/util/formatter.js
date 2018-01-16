sap.ui.define([
	"sap/m/MessageBox"
], function(MessageBox) {
	"use strict";

	return {
		getAlert: function(txt) {
			MessageBox.show(this.getAlertFormattedTxt(txt));
		},
		getAlertFormattedTxt: function(txt) {
			return txt.toUpperCase();
		},
		forTest: function() {
			return 'wangmo';
		},
		getState: function(n) {
			var t;
			switch (n) {
				case 0:
					t = "Success";
					break;
				case 1:
					t = "Error";
					break;
				case 2:
					t = "Warning";
					break;
				default:
					t = "None";
					break;
			}
			return t;

		}
	};
});