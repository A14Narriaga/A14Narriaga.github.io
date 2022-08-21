import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getSessionItem, setSessionItem } from '../../utils';


@Injectable({
  providedIn: 'root'
})

export default class ConfigurationService {

  // private currentHour = new Date().getHours();
  private session = {
    id: 'configuration',
    init: {
      // theme: this.currentHour >= 7 && this.currentHour <= 19 ? 'light' : 'dark',
      theme: 'blue',
      language: 'es',
      soundIsPlaying: false
    }
  }

  private languaje = new BehaviorSubject<string>(this.getLanguage());
  languaje$ = this.languaje.asObservable();

  getTheme = () =>
    getSessionItem(this.session.id, this.session.init, 'theme')

  setTheme = (theme: string): string => {
    const currentTheme = this.getTheme();
    document.body.classList.remove(currentTheme);
    setSessionItem(this.session.id, this.session.init, 'theme', theme);
    document.body.classList.add(theme);
    return theme;
  }

  loadTheme = () => this.setTheme(this.getTheme());

  getLanguage() {
    return getSessionItem(this.session.id, this.session.init, 'language')
  }

  setLanguage = (language: string) => this.languaje.next(language);

  loadLanguage = () => this.setLanguage(this.getLanguage());

  toggleLanguage(): string {
    const newLanguage = this.getLanguage() === 'es' ? 'en' : 'es';
    setSessionItem(this.session.id, this.session.init, 'language', newLanguage);
    this.setLanguage(newLanguage);
    return newLanguage;
  }

  soundIsPlaying = (): boolean =>
    getSessionItem(this.session.id, this.session.init, 'soundIsPlaying')

  handleSound = (playing: boolean) => { }

  loadSound = () => this.handleSound(this.soundIsPlaying());

  toggleSound(): boolean {
    const newState = !this.soundIsPlaying();
    setSessionItem(this.session.id, this.session.init, 'soundIsPlaying', newState);
    this.handleSound(newState);
    return newState;
  }

}
