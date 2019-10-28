import { Component, ɵrenderComponent as renderComponent, Injector, ɵLifecycleHooksFeature as LifecycleHooksFeature } from '@angular/core';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {

  constructor(private injector: Injector) {
    import('./dynamic/dynamic.component').then(({ DynamicComponent }) => {
      renderComponent(DynamicComponent, { injector, host: '#slot', hostFeatures: [LifecycleHooksFeature] });
    });
  }
}
