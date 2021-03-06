import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GoodDataAppComponent } from '../app/good-data.component';

beforeEachProviders(() => [GoodDataAppComponent]);

describe('App: GoodData', () => {
  it('should create the app',
      inject([GoodDataAppComponent], (app: GoodDataAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as appTitle \'GooDatA\'',
      inject([GoodDataAppComponent], (app: GoodDataAppComponent) => {
    expect(app.appTitle).toEqual('GooDatA');
  }));
});
