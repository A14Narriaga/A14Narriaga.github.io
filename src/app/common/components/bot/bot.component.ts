import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebsiteService } from '../../../services/website/website.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})

export class BotComponent {

  constructor(
    private formBuilder: FormBuilder,
    private service: WebsiteService
  ) { }

  @Input() set _downloadResume(download: boolean | null) { download ? this.downloadResume() : null; }

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

  formGroup: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ), Validators.maxLength(40)]],
    name: ['', [Validators.required, Validators.maxLength(100)]],
    matter: ['', [Validators.required, Validators.maxLength(50)]],
    msg: ['', [Validators.required, Validators.maxLength(250)]]
  })

  isInvalid = (name: string) =>
    this.formGroup.controls[name].errors &&
    this.formGroup.controls[name].touched

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

  toggleBot(visible?: boolean) {
    const bot = this.refBot.nativeElement;
    bot.setAttribute(
      'data-visible', visible
      ? visible ? 'true' : 'false'
      : bot.getAttribute('data-visible') === 'false' ? 'true' : 'false'
    )
    this.openBot = visible ? visible : !this.openBot;
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
      this.formGroup.reset();
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

  downloadResume() {
    setTimeout(async () => {
      this.toggleBot(true);
      this.offPulse();
      this.conversation = [];
      this.options.unshift({ bot: false, msg: 'No, gracias 😅', icon: '' });
      this.options = this.userOptions.filter(uo => uo.msg !== '¡Me gustaría ver el CV de Alan!')
      this.writting = true;
      await this.addMessage('¡Hola humano 😀!', '');
      await this.addMessage('¡A Alan le alegrará saber que estas interesado en su perfil!', '');
      await this.addMessage('Alan CV', 'download');
      await this.addMessage('¿Puedo ayudarte con algo más?', '');
      this.writting = false;
      this.setScrollToButton();
    }, 0);
  }

  async send() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      this.service.sendMsg(this.formGroup.value);
      this.formGroup.reset();
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

}

// userOptions = [
//   { type: 'usr', msg: '¡Solo quiero saludar 🖐!', icon: '' },
//   { type: 'usr', msg: '¡Me gustaría contactar a Alan!', icon: '' },
//   { type: 'usr', msg: '¡Me gustaría ver el CV de Alan!', icon: '' },
// ];
// welcome = [
//   { type: 'bot', msg: '¡Hola humano 😀!', icon: '' },
//   { type: 'bot', msg: 'Alan Bot 🤖 a tu servicio', icon: '' },
//   { type: 'bot', msg: '¿Comó puedo ayudarte?', icon: '' },
// ];
// yesNoQuestion = [
//   { type: 'usr', msg: 'Si', icon: '' },
//   { type: 'usr', msg: 'No', icon: '' },
// ];
// answers = new Map([
//   ['¡Solo quiero saludar 🖐!', [
//     { type: 'bot', msg: '¡Gracias por saludar y visitar el sitio 😋!', icon: '' },
//     { type: 'bot', msg: '¡Espero te encuentres bien 😊!', icon: '' },
//     { type: 'bot', msg: '¿Puedo ayudarte con algo más?', icon: '' },
//   ]],
//   ['¡Me gustaría contactar a Alan!', [
//     { type: 'bot', msg: '¡Perfecto!', icon: '' },
//     { type: '?', msg: '¿Te gustaría enviarle un mensaje para que puedan charlar?', icon: '' },
//   ]],
//   ['¡Me gustaría ver el CV de Alan!', [
//     { type: 'bot', msg: '¡Claro!', icon: '' },
//     { type: 'bot', msg: '¡Le alegrará saber que estas interesado en su perfil!', icon: '' },
//     { type: 'bot', msg: 'Alan CV', icon: 'download' },
//     { type: 'bot', msg: '¿Puedo ayudarte con algo más?', icon: '' },
//   ]],
//   ['No, gracias 😅', [
//     { type: 'bot', msg: 'De acuerdo', icon: '' },
//     { type: 'bot', msg: 'Espero haberte ayudado', icon: '' },
//     { type: 'bot', msg: 'Hasta pronto 👋', icon: '' },
//   ]]
// ]);