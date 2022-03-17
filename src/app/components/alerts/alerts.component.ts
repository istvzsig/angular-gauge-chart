import { Component, OnInit } from '@angular/core';
// import FmdBadIcon from '@mui/icons-material/FmdBad';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  numberOfNotifications = Math.random() * 99 | 0;
  // icon = FmdBadIcon;
  ngOnInit(): void {
  }

}
