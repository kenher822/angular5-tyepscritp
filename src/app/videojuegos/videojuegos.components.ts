import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    template: `
        <h2>Componente de video juegos 2018</h2>
        <h3 *ngIf="mostrar_retro != true">El mejor juego es: {{mejor_juego}}</h3>
        <h3 [style.background]="color"
            *ngIf="mostrar_retro">
            El juego retro es: {{mejor_juego_retro}}
        </h3>
    `
})
export class VideoJuegosComponent{
    public nombre = 'Videojuegos 2018';
    public mejor_juego = 'GTA-5';
    public mejor_juego_retro = 'Super Mario 64';
    public mostrar_retro = true;
    public color="violet";
}