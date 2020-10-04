"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
//Pages
var login_module_1 = require("./pages/login/login.module");
var cadastro_usuario_module_1 = require("./pages/cadastro-usuario/cadastro-usuario.module");
var cadastro_pets_module_1 = require("./pages/cadastro-pets/cadastro-pets.module");
var select_pet_module_1 = require("./pages/select-pet/select-pet.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            entryComponents: [],
            imports: [
                //Pages
                login_module_1.LoginPageModule,
                cadastro_usuario_module_1.CadastroUsuarioPageModule,
                cadastro_pets_module_1.CadastroPetsPageModule,
                select_pet_module_1.SelectPetPageModule,
                //others imports
                platform_browser_1.BrowserModule,
                angular_1.IonicModule.forRoot(),
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                ngx_2.StatusBar,
                ngx_1.SplashScreen,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
