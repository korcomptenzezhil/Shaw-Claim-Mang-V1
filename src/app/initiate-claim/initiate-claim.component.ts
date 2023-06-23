import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiate-claim',
  templateUrl: './initiate-claim.component.html',
  styleUrls: ['./initiate-claim.component.scss']
})
export class InitiateClaimComponent {
  openModal() {
    const modelDiv = document.getElementById('staticBackdrop');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  openModalStopInitiate() {
    const modelDiv = document.getElementById('stopinitiate');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  openModalInitiateClaim() {
    const modelDiv = document.getElementById('initiateclaim');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  openModalEndUserInfo() {
    const modelDiv = document.getElementById('enduserinfo');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }



  openModalPriorClaimSummary() {
    const modelDiv = document.getElementById('priorclaimsummary');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  openModalAddInvoice() {
    const modelDiv = document.getElementById('addinvoice');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  CloseModal() {
    const modelDiv = document.getElementById('staticBackdrop');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  CloseModalStopInitiate() {
    const modelDiv = document.getElementById('stopinitiate');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }


  CloseModalInitiateClaim() {
    const modelDiv = document.getElementById('initiateclaim');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }


  CloseModalEndUserInfo() {
    const modelDiv = document.getElementById('enduserinfo');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }


  CloseModalPriorClaimSummary() {
    const modelDiv = document.getElementById('priorclaimsummary');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  CloseModalAddInvoice() {
    const modelDiv = document.getElementById('addinvoice');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  ngOnInit() {
    this.addBodyClass();
  }
  // Function: Add class to body 
  addBodyClass() {
    const bodyTag = document.body;
    bodyTag.classList.add('my-class');
  }


}


