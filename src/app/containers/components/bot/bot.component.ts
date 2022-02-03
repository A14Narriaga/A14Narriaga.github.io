import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})

export class BotComponent {

  @ViewChild('bot') refBot!: ElementRef<HTMLDivElement>;
  @ViewChild('msgBot') refMsgBot!: ElementRef<HTMLDivElement>;
  @ViewChild('container') refContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('iconDiv') refIconDiv!: ElementRef<HTMLDivElement>;

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
  openBot = false;
  openMsgBot = false;

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
        this.toggleBot()
        await new Promise(resolve => setTimeout(resolve, 350));
        this.conversation = [...this.welcome]
        break;
      case 'Si':
        this.toggleMsgBot();
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

  toggleBot() {
    const bot = this.refBot.nativeElement;
    bot.setAttribute(
      'data-visible',
      bot.getAttribute('data-visible') === 'false' ? 'true' : 'false'
    )
    this.openBot = !this.openBot;
  }

  async toggleMsgBot() {
    this.writting = true;
    const msgBot = this.refMsgBot.nativeElement;
    msgBot.setAttribute(
      'data-visible',
      msgBot.getAttribute('data-visible') === 'false' ? 'true' : 'false'
    )
    this.openMsgBot = !this.openMsgBot;
  }

  offPulse() {
    const iconDiv = this.refIconDiv.nativeElement;
    iconDiv.setAttribute('data-pulse', 'false')
  }

  async handleBot() {
    if (this.openMsgBot) {
      this.toggleMsgBot();
      await this.addMessage('¿Te arrepentiste? 😖', '');
      await this.addMessage('Puedes intentarlo de nuevo cuando gustes', '');
      await this.addMessage('¿Hay algo más que pueda hacer por ti?', '');
      this.options = this.userOptions.filter(uo => uo.msg !== '¡Me gustaría contactar a Alan!');
      this.writting = false;
      this.setScrollToButton();
    }
    else {
      this.toggleBot();
      this.offPulse();
    }
  }

  async send() {
    this.toggleMsgBot();
    this.writting = true;
    await this.addMessage('He enviado tu mensaje a Alan', '');
    await this.addMessage('Espero se comunique contigo pronto 🤟', '');
    await this.addMessage('¿Puedo hacer algo más por ti?', '');
    this.options = this.userOptions.filter(uo => uo.msg !== '¡Me gustaría contactar a Alan!');
    this.writting = false;
    this.setScrollToButton();
  }

}
