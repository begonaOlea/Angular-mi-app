import { TestBed } from '@angular/core/testing';

import { MiCanActivateLoginService } from './mi-can-activate-login.service';

describe('MiCanActivateLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiCanActivateLoginService = TestBed.get(MiCanActivateLoginService);
    expect(service).toBeTruthy();
  });
});
