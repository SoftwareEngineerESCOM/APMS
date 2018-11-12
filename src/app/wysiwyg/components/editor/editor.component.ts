import { Component, OnInit } from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {editorConfig, htmlEditorTemplate} from './editor.strings';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  htmlContent: string;
  conf: AngularEditorConfig;
  constructor() {
    this.htmlContent = htmlEditorTemplate;
    this.conf = editorConfig;
  }

  ngOnInit() {
  }

}
