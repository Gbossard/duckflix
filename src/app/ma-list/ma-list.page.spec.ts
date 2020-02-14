import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaListPage } from './ma-list.page';

describe('MaListPage', () => {
  let component: MaListPage;
  let fixture: ComponentFixture<MaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
