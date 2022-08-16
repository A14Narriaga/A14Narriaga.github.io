export type methodTypes = 'get' | 'post' | 'patch' | 'put' | 'delete';

export function downloadFile(name: string, type: string, data: any) {
  const dataFile = `data:text/json;charset=utf-8,%EF%BB%BF ${data}`;
  const aTag = document.createElement('a');
  aTag.setAttribute('href', dataFile);
  aTag.setAttribute('download', `${name}.${type}`);
  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
}

export function copyToClipboard(data: string) {
  const inputTag = document.createElement('input');
  inputTag.value = data;
  document.body.appendChild(inputTag);
  inputTag.select()
  document.execCommand('copy');
  document.body.removeChild(inputTag);
}

export function getStorageItem(name: string, otherwise: any = {}): any {
  return sessionStorage.hasOwnProperty(name) ? JSON.parse(sessionStorage[name]) : otherwise;
}

export function setStorageItem(name: string, item: any): any {
  sessionStorage.setItem(name, JSON.stringify(item));
  return item;
}

export function setSessionItem(id: string, init: any, key: string, data: any): any {
  const storage = getStorageItem(id, init);
  storage[key] = data;
  setStorageItem(id, storage);
  return storage[key];
}

export function getSessionItem(id: string, init: any, key: string): any {
  const storage = getStorageItem(id, init);
  return storage[key];
}

export function openUrl(e: MouseEvent, url: string) {
  window.open(url, '_blank');
  e.stopPropagation();
}