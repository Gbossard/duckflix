import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GererProfilPage } from './gerer-profil.page';

describe('GererProfilPage', () => {
  let component: GererProfilPage;
  let fixture: ComponentFixture<GererProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererProfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GererProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
