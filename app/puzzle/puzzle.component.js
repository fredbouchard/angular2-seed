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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switchOneNumber = Math.round(Math.random());
                    this.switchTwoNumber = Math.round(Math.random());
                    this.switchThreeNumber = Math.round(Math.random());
                    this.switchFourNumber = Math.round(Math.random());
                    console.log(this.switchOneNumber, this.switchTwoNumber, this.switchThreeNumber, this.switchFourNumber);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        templateUrl: './dev/puzzle/puzzle.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7Z0JBZ0JBLENBQUM7Z0JBVkcsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUVsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzNHLENBQUM7Z0JBbEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSw4QkFBOEI7cUJBQzlDLENBQUM7O21DQUFBO2dCQWtCRixzQkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsNkNBZ0JDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktcHV6emxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGV2L3B1enpsZS9wdXp6bGUudHBsLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIHN3aXRjaE9uZU51bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaFR3b051bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaFRocmVlTnVtYmVyOiBudW1iZXI7XG4gICAgc3dpdGNoRm91ck51bWJlcjogbnVtYmVyO1xuICAgIFxuICAgIG5nT25Jbml0KCk6YW55e1xuICAgICAgICB0aGlzLnN3aXRjaE9uZU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoVHdvTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hUaHJlZU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoRm91ck51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2hPbmVOdW1iZXIsIHRoaXMuc3dpdGNoVHdvTnVtYmVyLCB0aGlzLnN3aXRjaFRocmVlTnVtYmVyLCB0aGlzLnN3aXRjaEZvdXJOdW1iZXIpO1xuICAgIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
