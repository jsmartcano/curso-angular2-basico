import {Component} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {PeliculasService} from "../services/peliculas.service";

@Component({
	selector: "peliculas-list",
	templateUrl: "app/view/peliculas-list.html",	
	providers: [PeliculasService]
})

export class PeliculasListComponent{
	public pelicula: Pelicula;
	public peliculaElegida: Pelicula;
	public mostrarDatos:boolean;
	public peliculas:Array<Pelicula>;

		
	constructor(private _peliculasService: PeliculasService) {

		this.peliculas = this._peliculasService.getPeliculas();
		this.mostrarDatos = false;
		
		this.pelicula = this.peliculas[0];
		this.peliculaElegida = this.peliculas[0];
	}

	onShowHide(value) {
		this.mostrarDatos = value;
	}

	onCambiarPelicula(pelicula) {
		this.pelicula = pelicula;
		this.peliculaElegida = pelicula;
	}

	debug(titulo = null) {
		if (titulo != null) {
			console.log(this.pelicula.titulo);
		}else {
			console.log(this.pelicula)
		}
	}
}