import {Component} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {Router} from "angular2/router";
import {PeliculasService} from "../services/peliculas.service";

@Component({
	templateUrl: "app/view/crear-pelicula.html",
	providers: [PeliculasService]	
})

export class CrearPeliculaComponent{

	constructor(private _peliculasService:PeliculasService, private _router: Router) {

	}
	
	onCrearPelicula(titulo, director, anio) {

		
		let id = this._peliculasService.getPeliculas().length;

		let pelicula: Pelicula = new Pelicula(id,titulo,director,anio);

		this._peliculasService.insertPelicula(pelicula);

		
		this._router.navigate(["Peliculas"]);
	}

