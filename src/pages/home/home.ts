import { Component } from '@angular/core';
import { CadastroPage} from '../../pages/cadastro/cadastro';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pagina_cadastro(){
    this.navCtrl.push(CadastroPage);
  }

}
