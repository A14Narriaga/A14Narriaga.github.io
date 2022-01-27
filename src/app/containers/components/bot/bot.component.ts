import { Component, ElementRef, ViewChild } from '@angular/core';

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
  botInAnim = true;

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

  executeBotOpt(key: string): void {
    switch (key) {
      case 'Alan CV':
        window.open('assets/documents/CV_Arriaga_Alan.pdf', '_blank');
        break;
    }
  }

  async addMessages(opt: any) {
    this.options.unshift({ bot: false, msg: 'No, gracias 😅', icon: '' });
    this.options = this.userOptions.filter(uo => uo.msg !== opt.msg)
    this.conversation.push(opt);
    this.writting = true;
    switch (opt.msg) {
      case '¡Solo quiero saludar 🖐!':
        await this.addMessage('¡Gracias por saludar y visitar el sitio 😋!', '');
        await this.addMessage('¡Espero te encuentres bien 😊!', '');
        await this.addMessage('¿Puedo ayudarte con algo más?', '');
        break;
      case '¡Me gustaría contactar a Alan!':
        await this.addMessage('¡Perfecto!', '');
        await this.addMessage('¿Te gustaría enviarle un mensaje para que puedan charlar?', '');
        this.options = [
          { bot: false, msg: 'Si', icon: '' },
          { bot: false, msg: 'No', icon: '' },
        ];
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
        this.closeBot(true)
        return;
      case 'Si':
        this.msgView = true
        this.writting = false;
        return;
      case 'No':
        await this.addMessage('Bueno, será en otra ocasión 😢', '');
        await this.addMessage('¿Puedo hacer algo más por ti?', '');
        this.options = this.userOptions.filter(uo => uo.msg !== '¡Me gustaría contactar a Alan!');
        break;
    }
    this.writting = false;
    this.setScrollToButton();
  }

  closeBot = (reset = false) => {
    this.botInAnim = false;
    setTimeout(() => {
      this.openBot = false
      this.botInAnim = true;
      if (reset) this.conversation = [...this.welcome];
    }, 500);
  }

  async handleBot() {
    if (this.msgView) {
      this.msgView = false
      this.writting = true;
      await this.addMessage('¿Te arrepentiste? 😖', '');
      await this.addMessage('Puedes intentarlo de nuevo cuando gustes', '');
      this.options = this.userOptions.filter(uo => uo.msg !== '¡Me gustaría contactar a Alan!');
      await this.addMessage('¿Hay algo más que pueda hacer por ti?', '');
      this.writting = false;
      this.setScrollToButton();
    } else {
      if (!this.openBot) {
        this.openBot = true;
        this.setScrollToButton();
      }
      else this.closeBot()
    }
  }

  async send() {
    this.msgView = false;
    this.writting = true;
    await this.addMessage('He enviado tu mensaje a Alan', '');
    await this.addMessage('Espero se comunique contigo pronto 🤟', '');
    await this.addMessage('¿Puedo hacer algo más por ti?', '');
    this.options = this.userOptions.filter(uo => uo.msg !== '¡Me gustaría contactar a Alan!');
    this.writting = false;
    this.setScrollToButton();
  }

}
