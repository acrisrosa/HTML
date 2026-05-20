import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagImg } from "./tag-img/tag-img";
import { TagVideo } from "./tag-video/tag-video";
import { TagSemantica } from "./tag-semantica/tag-semantica";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagImg, TagVideo, TagSemantica],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicios_Ana_aula3');
}
