import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Inject, Logger, Injectable } from '@nestjs/common';

@Injectable()
@WebSocketGateway()
export class GoogleSheetsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(GoogleSheetsGateway.name);
  @WebSocketServer() server: Server;

  afterInit() {
    this.logger.log('🔌  WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log(`🔌  Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`🔌  Client disconnected: ${client.id}`);
  }

  sendUpdate(data: any) {
    this.server.emit('sheet-update', data);
  }
}
