import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagsH } from "./tags-h/tags-h";
import { TagsParagrafo } from "./tags-paragrafo/tags-paragrafo";
import { TagsListas } from "./tags-listas/tags-listas";
import { TagsFormatacao } from "./tags-formatacao/tags-formatacao";
import { TagsLinks } from "./tags-links/tags-links";
import { TagImg } from "./tag-img/tag-img";
import { TagVideo } from "./tag-video/tag-video";
import { TagSemantica } from "./tag-semantica/tag-semantica";
import { TabelaEstatica1 } from "./tabela-estatica1/tabela-estatica1";
import { TabelaEstatica2 } from "./tabela-estatica2/tabela-estatica2";
import { FormularioEstatica } from "./formulario-estatica/formulario-estatica";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagsH, TagsParagrafo, TagsListas, TagsFormatacao, TagsLinks, TagImg, TagVideo, TagSemantica, TabelaEstatica1, TabelaEstatica2, FormularioEstatica],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicios_Ana');
}
