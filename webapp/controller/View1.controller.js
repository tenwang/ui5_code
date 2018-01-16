sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/ks/test/zten_unit_Test/util/formatter",
	"sap/ui/model/json/JSONModel"
], function(Controller, formatter, JSONModel) {
	"use strict";

	return Controller.extend("com.ks.test.zten_unit_Test.controller.View1", {

		onInit: function() {
			var oModel = new JSONModel();
			// var aData = {
			// 	state: "Success"
			// };
			// oModel.setData(aData);
			oModel.setProperty("/state", "Error");
			this.getView().setModel(oModel);
		},
		raiseAlert: function() {
			var txt = "wangmo";
			formatter.getAlert(txt);
		},
		changeTxtState: function() {
			var inputTxt = this.getView().byId("inputVal").getValue();
			var state = formatter.getState(parseInt(inputTxt, 10));
			this.getView().getModel().setProperty("/state", state);
		}

	});
});