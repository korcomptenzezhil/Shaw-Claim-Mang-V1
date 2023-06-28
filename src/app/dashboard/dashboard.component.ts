import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  isSideNavCollapsed: boolean = true;
  //screenWidth!: number;
  inputRespData = {
    claimDuesArray : [
      {label:"47", text:"Total claims in queue"},
      {label:"14", text:"Aged claims in queue "},
      {label:"07", text:"Uninitiated claims"},
      {label:"04", text:"Priority claims"}
    ],
    claimDuesObject:{
      inspec:6,
      pendingRep:3,
      require: 1,
      pendingLab: 19,

    },
    overdueList : [
      {days:31, title: "123456" ,des:"Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum"},
      {days:12, title: "data123", des:"Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum"},
      {days:43, title: "hbsvsbv", des:"Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum"},
      {days:11, title: "hbsvsbv", des:"Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum"},
    ],
    upList : [
      {days:31, title: "hb" ,des:"Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum"},
      {days:12, title: "hbsvsbv", des:"Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum"},
      {days:43, title: "hbsvsbv", des:"Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum"},
      {days:11, title: "hbsvsbv", des:"Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum"},
    ]

    }

    
  onToggleSideNav(collapsed: boolean): void {
    this.isSideNavCollapsed = collapsed;
  }
  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = "body-trimmed";
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = "body-md-screen";
    }
    return styleClass;
  }
}
