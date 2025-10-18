import { Routes } from "@angular/router";
import { FlutterComponent } from "./flutter/flutter.component";

export const routes:Routes=[
    {
        path:'home',
        loadComponent:async () => (await import('./flutter/flutter.component')).FlutterComponent
    },
    {
        path:'request',
        loadComponent:async () => (await import('./flutter-request/flutter-request.component')).FlutterRequestComponent
    }
]