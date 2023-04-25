sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/m/library",
    'sap/m/MessageToast'
], function (BaseController, JSONModel, formatter, mobileLibrary, MessageToast) {
    "use strict";

    return BaseController.extend("com.trm.cap.rates.ui5rate.controller.NewRate", {
    
        formatter: formatter,
        /* ============================================================*/
        /*lifecycle methods*/
        /* ============================================================*/
        onInit: function () {
            this.initLocalModel();
        },

        initLocalModel: function(){
            var oViewModel = new JSONModel({
                "RATE_TYPE"   : "",
                "FROM_CURR"   : "",
                "TO_CURRNCY"  : "",
                "VALID_FROM"  : "",
                "EXCH_RATE"   : "",
                "FROM_FACTOR" : "",
                "TO_FACTOR"   : ""
            });

            this.getView().setModel(oViewModel, "newRate")
        },
        /* Set the full screen mode to false and navigate to list page */
        onCloseDetailPress: function () {
            this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreen", false); 
            this.getRouter().navTo("list");
        },

        onSaveNewrate: function (oEvent) {
            var that = this;
            var oRate = this.getView().getModel("newRate").getProperty("/");

            this.getModel().create("/rate", oRate, { 
                success: function (oData) {
                    MessageToast.show("Rate creado!");
                    that.initLocalModel();
                }

            });
        }
    
    });

});

