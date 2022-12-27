import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/core/models/student.models';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './student-dialog.component.html',
})
export class StudentDialogComponent {
  nameControl = new FormControl()
  surnameControl = new FormControl()

  studentForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
  })

  constructor (public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Student | null,) {
    if (data) {
      this.studentForm.patchValue(data);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      data: {name: this.nameControl, surname: this.surnameControl},
    });
  }

//   onNoClick(): void {
//     this.dialogRef.close();
// };
}