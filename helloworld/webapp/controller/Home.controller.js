// Create an SAPUI5 application
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
  ], function(Controller, MessageBox) {
    "use strict";
  
    return Controller.extend("CalculatorApp.controller.Main", {
      onInit: function() {
        // Initialization code here // sample code
      },
  
      onCalculate: function() {
        // Get input values
        var num1 = parseFloat(this.getView().byId("inputNum1").getValue());
        var num2 = parseFloat(this.getView().byId("inputNum2").getValue());
        var operation = this.getView().byId("selectOperation").getSelectedKey();
  
        var result;
        // Perform calculation based on the selected operation
        switch(operation) {
          case "add":
            result = num1 + num2;
            break;
          case "subtract":
            result = num1 - num2;
            break;
          case "multiply":
            result = num1 * num2;
            break;
          case "divide":
            if (num2 !== 0) {
              result = num1 / num2;
            } else {
              MessageBox.error("Cannot divide by zero");
              return;
            }
            break;
          default:
            MessageBox.error("Please select an operation");
            return;
        }
  
        // Display the result
        this.getView().byId("result").setText("Result: " + result);
      }
    });
  });
  