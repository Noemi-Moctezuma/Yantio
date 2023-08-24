import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { reportarPage } from './reportar.page';

describe('reportarPage', () => {
  let component: reportarPage;
  let fixture: ComponentFixture<reportarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [reportarPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(reportarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
