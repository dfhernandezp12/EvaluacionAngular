/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ VehiculoListComponent ],
      providers: [VehiculoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 10; i++) {
      const vehiculo = new Vehiculo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.vehiculos.push(vehiculo);
      }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 30 <td> elements', () => {
    expect(debug.queryAll(By.css('td'))).toHaveSize(30)
  });

  it('should have 14 <td> elements', () => {
    expect(debug.queryAll(By.css('th'))).toHaveSize(14)
  });

  it('should have 1 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(1)
  });

  it('should have 1 <h1> elements', () => {
    expect(debug.queryAll(By.css('h1'))).toHaveSize(1)
  });

  it('should have 1 <h1> elements', () => {
    const conteoMarcas: string | string[] = [];
    component.vehiculos.forEach((vehiculo) => {
       if (!conteoMarcas.includes(vehiculo.marca)) {
        conteoMarcas.push(vehiculo.marca)
       }
    });
    expect(debug.queryAll(By.css('p'))).toHaveSize(conteoMarcas.length)
  });

});
