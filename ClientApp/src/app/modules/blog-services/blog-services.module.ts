import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogpostsServiceMock } from './blogposts.service.mock';
import { BlogpostsService } from './blogposts.service';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class BlogServicesModule {
  public static forRoot(options: { mock: boolean }): ModuleWithProviders {
    return {
      ngModule: BlogServicesModule,
      providers: [
        {
          provide: BlogpostsService,
          useClass: options.mock ? BlogpostsServiceMock : BlogpostsService
        }
      ]
    };
  }
}
