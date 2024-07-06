import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface User {
  id: string;
  sockets: string[];
}

interface Transaccion {
  id?: string;
  amount: number;
  description: string;
}

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private users: Record<string, User> = {};
  private activeTransactions: Transaccion[] = [];

  handleConnection(client: Socket) {
    const userId = client.handshake.query.userId as string;
    if (!this.users[userId]) {
      this.users[userId] = { id: userId, sockets: [] };
    }

    if (this.users[userId].sockets.length >= 3) {
      client.disconnect();
      return;
    }

    this.users[userId].sockets.push(client.id);
  }

  handleDisconnect(client: Socket) {
    const userId = client.handshake.query.userId as string;
    if (this.users[userId]) {
      this.users[userId].sockets = this.users[userId].sockets.filter(id => id !== client.id);
      if (this.users[userId].sockets.length === 0) {
        delete this.users[userId];
      }
    }
  }

  @SubscribeMessage('agregar-transaccion')
  async handleAddTransaction(client: Socket, payload: Transaccion): Promise<void> {
    const newTransaction: Transaccion = { ...payload, id: Date.now().toString() };
    this.activeTransactions.push(newTransaction);
    this.server.emit('nueva-transaccion', newTransaction);
  }

  @SubscribeMessage('consultar-activos')
  handleGetActiveTransactions(client: Socket): void {
    this.server.emit('lista-transacciones', this.activeTransactions);
  }
}
