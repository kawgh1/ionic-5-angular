import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController
  ) {}

  public async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Custom Action Sheet',
      subHeader: 'Custom Subheader',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert('Cancel button clicked');
          },
        },
        {
          text: 'Click',
          role: 'destructive',
          handler: () => {
            alert('Click button clicked');
          },
        },
        {
          text: 'Submit',
          role: 'submit',
          handler: () => {
            alert('Submit button clicked');
          },
        },
      ],
    });

    actionSheet.onDidDismiss().then(() => {
      console.log('action sheet dismissed');
    });

    actionSheet.addEventListener('ionActionSheetDidPresent', () => {
      console.log('Action sheet did present');
    });
    await actionSheet.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2',
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3',
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever',
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12',
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10,
        },
        {
          name: 'name7',
          type: 'number',
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal',
          },
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }
}
