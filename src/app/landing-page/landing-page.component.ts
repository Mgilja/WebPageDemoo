import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ContactUsComponent } from "../formcontact/contact-us.component";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  onOpenDialogClicked() {
    const dialogRef = this.dialog.open(ContactUsComponent)
    dialogRef.afterClosed().subscribe(result=> {
      console.log(`this dialog was ${result}`);
      
    })
   }

}
