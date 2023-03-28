import { PersistingInterface } from "../classes/interface/persisty-interfaces";

export class Persisting implements PersistingInterface {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }
}
