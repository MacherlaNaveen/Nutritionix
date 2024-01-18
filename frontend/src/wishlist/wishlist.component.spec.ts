import { FormBuilder } from '@angular/forms';
import { WishlistServiceService } from './../services/wishlist-service.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistComponent } from './wishlist.component';
import { AppComponent } from 'src/app/app.component';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistComponent],
      imports: [HttpClientTestingModule,MatTableModule] ,
      providers: [

        FormBuilder,
        AppComponent,
      ],
    });
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
