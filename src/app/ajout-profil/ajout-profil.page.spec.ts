import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutProfilPage } from './ajout-profil.page';

describe('AjoutProfilPage', () => {
  let component: AjoutProfilPage;
  let fixture: ComponentFixture<AjoutProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutProfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
