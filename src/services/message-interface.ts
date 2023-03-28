import { MessagingInterface } from "../classes/interface/messaging-interface";

export class Messaging implements MessagingInterface {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
