import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { NewlinePipe } from './newline.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule, MatTableModule, MatCardModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditorService } from './editor.service';

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
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  declarations: [
    EditorComponent,
    NewlinePipe,
  ],
  providers: [EditorService],
  exports: [
    EditorComponent,
  ],
})
export class EditorModule { }
