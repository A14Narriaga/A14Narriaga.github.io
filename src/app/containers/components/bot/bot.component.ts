import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.sass']
})

export class BotComponent {

  @ViewChild('container') refContainer!: ElementRef<HTMLDivElement>;

  writting = false;
  userOptions = [
    { bot: false, msg: '¡Solo quiero saludar 🖐!', icon: '' },
    { bot: false, msg: '¡Me gustaria contactarte!', icon: '' },
    { bot: false, msg: '¡Me gustaria ver tu CV!', icon: '' },
  ];
  options = this.userOptions;
  conversation = [
    { bot: true, msg: '¡Hola 😀, bienvenido!', icon: '' },
    { bot: true, msg: 'Soy Alan Bot 🤖', icon: '' },
    { bot: true, msg: '¿Comó puedo ayudarte?', icon: '' },
  ]

  executeBotOpt(key: string): void {
    switch (key) {
      case 'Mi CV':
        window.open('assets/documents/CV_Arriaga_Alan.pdf', '_blank');
        break;
      case 'Enviar mensaje':
        break;
    }
  }

  async addMessage(msg: any, icon: string) {
    this.conversation.push({ bot: true, msg, icon })
    setTimeout(() => {
      const container = this.refContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }, 0);
    await new Promise(resolve => setTimeout(resolve, 1500));
  }

  async addMessages(opt: any) {
    this.writting = true;
    this.options = this.userOptions.filter(uo => uo.msg !== opt.msg)
    this.conversation.push(opt);
    switch (opt.msg) {
      case '¡Solo quiero saludar 🖐!':
        await this.addMessage('¡Espero te encuentres bien 😊!', '');
        await this.addMessage('¡Gracias por saludar y visitar mi sitio 😋!', '');
        await this.addMessage('¿Puedo ayudarte con algo más?', '');
        break;
      case '¡Me gustaria contactarte!':
        await this.addMessage('¡Perfecto!', '');
        await this.addMessage('Enviame un mensaje y charlemos.', '');
        await this.addMessage('Enviar mensaje', 'envelope');
        await this.addMessage('¿Puedo ayudarte con algo más?', '');
        break;
      case '¡Me gustaria ver tu CV!':
        await this.addMessage('¡Claro!', '');
        await this.addMessage('¡Me alegra que estes interesado en mi perfil!', '');
        await this.addMessage('Mi CV', 'download');
        await this.addMessage('¿Puedo ayudarte con algo más?', '');
        break;
    }
    this.writting = false;
    setTimeout(() => {
      const container = this.refContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }, 0);
  }

}
