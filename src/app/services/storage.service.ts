import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //? Matias: funcion para guardar objetos en local storage
  async setObject(obj = {}, key: string): Promise<void>{
    await Preferences.set({
      key: key,
      value: JSON.stringify(obj)
    })
  }

  //? Matias: funcion para obtener objetos desde local storage
  async getUser(key: string): Promise<User>{
    const strObj = await Preferences.get({key: key})
    const obj = JSON.parse(strObj.value!)
    return obj
  }

}
