// import WebSocket from 'ws';
import { WebSocketClient } from '../interfaces';

export class WebSocketHelper {
  private clients: Map<string, WebSocketClient> = new Map();

  constructor(private server: WebSocket) {
    this.init();
  }

  private init() {
    if (this.server) {
      this.server.onopen = () => {
        this.server.send('Hello from client');

        // const clientId = this.generateClientId();
        // const client: WebSocketClient = { socket, id: clientId };

        // this.clients.set(clientId, client);
        // console.log(`Client connected: ${clientId}`);

        // this.setupClientListeners(client);
      };

      this.server.onopen = () => {
        console.log('Connected to WebSocket server');
        this.server.send('Hello from client');
      };

      this.server.onmessage = (event) => {
        console.log('Received from server:', event.data);
      };

      this.server.onclose = () => {
        console.log('Disconnected from WebSocket server');
      };
    }
  }

  /*
  // Generate unique client ID
  private generateClientId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  // Broadcast a message to all connected clients
  public broadcast(message: string): void {
    this.clients.forEach((client) => {
      if (client.socket.readyState === WebSocket.OPEN) {
        client.socket.send(message);
      }
    });
  }

  // Send message to a specific client
  public sendToClient(clientId: string, message: string): void {
    const client = this.clients.get(clientId);
    if (client && client.socket.readyState === WebSocket.OPEN) {
      client.socket.send(message);
    } else {
      console.log(`Client ${clientId} not available.`);
    }
  }

  // Handle incoming message and other socket events for each client
  private setupClientListeners(client: WebSocketClient) {
    const { socket, id } = client;

    socket.on('message', (data: WebSocket.Data) => {
      console.log(`Message from client ${id}: ${data}`);
      // Optionally process or broadcast message here
    });

    socket.on('close', () => {
      console.log(`Client ${id} disconnected`);
      this.clients.delete(id);
    });

    socket.on('error', (err) => {
      console.error(`Error on client ${id}:`, err);
      this.clients.delete(id);
    });
  }
  */
}
