import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";

@Component({
	selector: "mi-app",
	templateUrl: "app/view/peliculas.html",
	styleUrls: ["../assets/css/styles.css"]
})

export class AppComponent {
	public titulo = "Películas con Angular 2";
	public pelicula: Pelicula;
	public mostrarDatos:boolean;
	public peliculas:Array<Pelicula>;

	
	constructor() {
		this.mostrarDatos = false;
		this.pelicula = new Pelicula(1,"Batman v Superman","Zack Sninder",2016);

		this.peliculas = [
			new Pelicula(1,"Batman v Superman","Zack Sninder",2016),
			new Pelicula(2,"La verdad duele","Will Smith",2016),
			new Pelicula(3,"El Señor de los Anillos","Desconocido",2004),
			new Pelicula(4,"Una historia real","El de super salidos",2015),
			new Pelicula(5,"Tierra y Libertad","Uno bueno",2004)
		]

		this.debug();
	}

	onShowHide(value) {
		this.mostrarDatos = value;
	}


	debug(titulo = null) {
		if (titulo != null) {
			console.log(this.pelicula.titulo);
		}else {
			console.log(this.pelicula)
		}
	}

}
