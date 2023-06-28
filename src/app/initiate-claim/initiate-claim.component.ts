import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiate-claim',
  templateUrl: './initiate-claim.component.html',
  styleUrls: ['./initiate-claim.component.scss']
})
export class InitiateClaimComponent {
  openModalEnterClaim() {
    const modelDiv = document.getElementById('modalEnterClaim');
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

  openModalWarning() {
    const modelDiv = document.getElementById('modalWarning');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  openModalInfo() {
    const modelDiv = document.getElementById('modalInfo');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  openModalError() {
    const modelDiv = document.getElementById('modalError');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  openModalInitiateClaim() {
    const modelDiv = document.getElementById('initiateclaim');
    const modelDiv1 = document.getElementById('modalEnterClaim');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
    if (modelDiv1 != null) {
      modelDiv1.style.display = 'none';
    }
  }

  openModalEndUserInfo() {
    const modelDiv = document.getElementById('enduserinfo');
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

  openModalPriorClaimSummary() {
    const modelDiv = document.getElementById('priorclaimsummary');
    const modelDiv1 = document.getElementById('addinvoice');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
    if (modelDiv1 != null) {
      modelDiv1.style.display = 'none';
    }
  }
  openModalModalStoreInvoice() {
    const modelDiv = document.getElementById('storeinvoice');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  CloseModalEnterClaim() {
    const modelDiv = document.getElementById('modalEnterClaim');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  CloseModalInfo() {
    const modelDiv = document.getElementById('modalInfo');
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

  CloseModalWarning() {
    const modelDiv = document.getElementById('modalWarning');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  CloseModalError() {
    const modelDiv = document.getElementById('modalError');
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

  CloseModalStoreInvoice() {
    const modelDiv = document.getElementById('storeinvoice');
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


