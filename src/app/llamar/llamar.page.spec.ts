import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { llamarPage } from './llamar.page';

describe('llamarPage', () => {
  let component: llamarPage;
  let fixture: ComponentFixture<llamarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [llamarPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(llamarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
