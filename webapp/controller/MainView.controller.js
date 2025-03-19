sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("dpm.invoices.controller.MainView", {
        onInit() {
            var oModel = new JSONModel();
            this.getView().setModel(oModel, "BU");
        }
    });
});