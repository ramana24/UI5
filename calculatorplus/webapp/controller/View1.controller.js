sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ux.calculatorplus.controller.View1", {
            onInit: function () {

            },
            onInit: function() {
                this.resetCalculator();
              },
          
              onNumberPress: function(event) {
                var currentNumber = event.getSource().getText();
                var currentValue = this.getView().byId("display").getValue();
          
                this.getView().byId("display").setValue(currentValue + currentNumber);
              },
          
              onOperatorPress: function(event) {
                var currentOperator = event.getSource().getText();
                var currentValue = parseFloat(this.getView().byId("display").getValue());
          
                this.operator = currentOperator;
                this.firstOperand = currentValue;
          
                this.getView().byId("display").setValue("");
              },
          
              onCalculate: function() {
                var secondOperand = parseFloat(this.getView().byId("display").getValue());
                var result;
          
                switch(this.operator) {
                  case "+":
                    result = this.firstOperand + secondOperand;
                    break;
                  case "-":
                    result = this.firstOperand - secondOperand;
                    break;
                  case "*":
                    result = this.firstOperand * secondOperand;
                    break;
                  case "/":
                    if (secondOperand !== 0) {
                      result = this.firstOperand / secondOperand;
                    } else {
                      result = "Error: Divide by zero";
                    }
                    break;
                  default:
                    result = "Error: Invalid operation";
                    break;
                }
          
                this.getView().byId("display").setValue(result);
              },
          
              onClear: function() {
                this.resetCalculator();
              },
          
              resetCalculator: function() {
                this.operator = "";
                this.firstOperand = 0;
                this.getView().byId("display").setValue("");
              }
        });
    });
