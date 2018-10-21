import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { NewlinePipe } from './newline.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule, MatTableModule, MatCardModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule
  ],
  declarations: [
    EditorComponent,
    NewlinePipe,
  ],
  exports: [
    EditorComponent,
  ],
})
export class EditorModule { }
