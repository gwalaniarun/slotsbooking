import { Component, OnInit } from '@angular/core';
import { SlotService } from '../slot.service';

@Component({
  selector: 'app-slot-info',
  templateUrl: './slot-info.component.html',
  styleUrls: ['./slot-info.component.css']
})
export class SlotInfoComponent implements OnInit {

  constructor(private _slotService:SlotService) { }

  slots:any;
  sessions:any = [];

  ngOnInit(): void {
    this.getSlotsByPincode();
  }

  getSlotsByPincode(){
    this._slotService.getSlots("383315").subscribe(
      data => {
        console.log(data);
        this.slots = data;
        this.sessions = this.slots.sessions;
        console.log(this.sessions);
      }
    );
  }

}
