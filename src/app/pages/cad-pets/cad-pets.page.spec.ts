import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadPetsPage } from './cad-pets.page';

describe('CadPetsPage', () => {
  let component: CadPetsPage;
  let fixture: ComponentFixture<CadPetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadPetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadPetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
