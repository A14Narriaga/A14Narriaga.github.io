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
    { bot: false, msg: '¡Me gustaría contactar a Alan!', icon: '' },
    { bot: false, msg: '¡Me gustaría ver el CV de Alan!', icon: '' },
  ];
  welcome = [
    { bot: true, msg: '¡Hola humano 😀!', icon: '' },
    { bot: true, msg: 'Alan Bot 🤖 a tu servicio', icon: '' },
    { bot: true, msg: '¿Comó puedo ayudarte?', icon: '' },
  ]
  conversation = [...this.welcome];
  options = this.userOptions;
  msgView = false;
  openBot = false;

  executeBotOpt(key: string): void {
    switch (key) {
      case 'Alan CV':
        window.open('assets/documents/CV_Arriaga_Alan.pdf', '_blank');
        break;
      case 'Enviar mensaje':
        this.msgView = true
        break;
    }
  }

  setScrollToButton() {
    setTimeout(() => {
      const container = this.refContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }, 0);
  }

  async addMessage(msg: any, icon: string) {
    this.conversation.push({ bot: true, msg, icon })
    this.setScrollToButton();
    await new Promise(resolve => setTimeout(resolve, 1500));
  }

  async addMessages(opt: any) {
    this.options.unshift({ bot: false, msg: 'No, gracias 😅', icon: '' });
    this.options = this.userOptions.filter(uo => uo.msg !== opt.msg)
    this.conversation.push(opt);
    this.writting = true;
    switch (opt.msg) {
      case '¡Solo quiero saludar 🖐!':
        await this.addMessage('¡Espero te encuentres bien 😊!', '');
        await this.addMessage('¡Gracias por saludar y visitar el sitio 😋!', '');
        await this.addMessage('¿Puedo ayudarte con algo más?', '');
        break;
      case '¡Me gustaría contactar a Alan!':
        await this.addMessage('¡Perfecto!', '');
        await this.addMessage('¿Te gustaría enviarle un mensaje para que puedan charlar?', '');
        await this.addMessage('Enviar mensaje', 'envelope');
        await this.addMessage('¿Puedo hacer algo más por ti?', '');
        break;
      case '¡Me gustaría ver el CV de Alan!':
        await this.addMessage('¡Claro!', '');
        await this.addMessage('¡Le alegrará saber que estas interesado en su perfil!', '');
        await this.addMessage('Alan CV', 'download');
        await this.addMessage('¿Puedo ayudarte con algo más?', '');
        break;
      case 'No, gracias 😅':
        await this.addMessage('De acuerdo', '');
        await this.addMessage('Espero haberte ayudado', '');
        await this.addMessage('Hasta pronto 👋', '');
        this.writting = false;
        this.openBot = false;
        this.conversation = [...this.welcome];
        return;
    }
    this.writting = false;
    this.setScrollToButton();
  }

  handleBot() {
    this.msgView ? (this.msgView = false) : (this.openBot = !this.openBot)
    if (this.openBot) this.setScrollToButton();
  }

  send() {
    console.log('Send form data');
    this.msgView = false;
  }

}
