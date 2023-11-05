import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css'],
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];

  constructor(private vehiculoService: VehiculoService) {}

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos)=>{
      this.vehiculos=vehiculos;
    })
  }

  ngOnInit() {
    this.getVehiculos();
  }

  public contarVehiculosPorMarca(): any {
    const resultado: Map<string, number> = new Map();

    this.vehiculos.forEach((vehiculo) => {
       if (resultado.has(vehiculo.marca)) {
         resultado.set(vehiculo.marca, resultado.get(vehiculo.marca)! + 1);
       } else {
         resultado.set(vehiculo.marca, 1);
       }
    });

    return Array.from(resultado.entries())
        .map(([marca, conteo]) => `Total ${marca}: ${conteo}`);
   }
}
