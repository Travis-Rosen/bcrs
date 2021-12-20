import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDialogSummaryComponent } from './invoice-dialog-summary.component';

describe('InvoiceDialogSummaryComponent', () => {
  let component: InvoiceDialogSummaryComponent;
  let fixture: ComponentFixture<InvoiceDialogSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDialogSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDialogSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
