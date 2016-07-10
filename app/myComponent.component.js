System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var myComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            myComponent = (function () {
                function myComponent() {
                }
                myComponent.prototype.ngOnInit = function () {
                    this.name = "PHOQUE YOU";
                };
                myComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n\t<h2>Yeah!  {{ name }}</h2>\n\t<pre [style.color] = \"!inputText1.value ? 'red' : 'green'\">Code: {{ inputText1.value }}</pre>\n\t<input type=\"text\" #inputText1 (keyup)=\"null\"/>\n\t",
                    }), 
                    __metadata('design:paramtypes', [])
                ], myComponent);
                return myComponent;
            }());
            exports_1("myComponent", myComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Q29tcG9uZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUFBO2dCQU1BLENBQUM7Z0JBSEEsOEJBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztnQkFDMUIsQ0FBQztnQkFkRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsOExBSVQ7cUJBRUQsQ0FBQzs7K0JBQUE7Z0JBT0Ysa0JBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELHFDQU1DLENBQUEiLCJmaWxlIjoibXlDb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtvbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8aDI+WWVhaCEgIHt7IG5hbWUgfX08L2gyPlxuXHQ8cHJlIFtzdHlsZS5jb2xvcl0gPSBcIiFpbnB1dFRleHQxLnZhbHVlID8gJ3JlZCcgOiAnZ3JlZW4nXCI+Q29kZToge3sgaW5wdXRUZXh0MS52YWx1ZSB9fTwvcHJlPlxuXHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRUZXh0MSAoa2V5dXApPVwibnVsbFwiLz5cblx0YCxcblxufSlcbmV4cG9ydCBjbGFzcyBteUNvbXBvbmVudCBpbXBsZW1lbnRzIG9uSW5pdCgpe1xuXHRuYW1lOiBzdHJpbmc7XG5cblx0bmdPbkluaXQoKTphbnl7XG5cdFx0dGhpcy5uYW1lID0gXCJQSE9RVUUgWU9VXCI7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
