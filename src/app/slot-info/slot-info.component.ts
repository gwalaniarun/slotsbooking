import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SlotService } from '../slot.service';

@Component({
  selector: 'app-slot-info',
  templateUrl: './slot-info.component.html',
  styleUrls: ['./slot-info.component.css']
})
export class SlotInfoComponent implements OnInit {

  constructor(private _slotService:SlotService,private datePipe: DatePipe) { }

  slots:any;
  sessions:any = [];
  dateStr:any;
   
  ngOnInit(): void {
    this.getSlotsByPincode();
  }

  getSlotsByPincode(){
    let date:Date =new Date();
    let dateString:any = this.datePipe.transform(date,"dd-MM-yyyy");
    this.dateStr = dateString;
    console.log(`Date is ${dateString}`);
    this._slotService.getSlots("383315",dateString).subscribe(
      data => {
        console.log(data);
        this.slots = data;
        this.sessions = this.slots.sessions;
        console.log(this.sessions);
      }
    );
  }

}
