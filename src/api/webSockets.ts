import { State } from '../helpers/state';
import { WebSocketHelper } from '../helpers/websocket_helper';

// import WebSocket from 'ws';
// import { WebSocketServer } from 'ws'

/// WebSocket APIs
export class WebSockets {
  
  /// Initialize 
  init() {
    try
    {
      // console.log('Initializing WebSockets');
      
      
      State.webSocketServer = new WebSocket(State.webSocketEndpoint!);
      State.webSocketHelper = new WebSocketHelper(State.webSocketServer);
  
      // console.log('WebSocket server is running on ws://localhost:8080');
  
      // Example: Broadcasting a message every 10 seconds
      setInterval(() => {
        State.webSocketServer.send('Hello again from server');
      }, 10000);
    }
    catch(e)
    {
      // console.log(e);
      return false;
    }

    return true;
  }

  // Send message
  sendMessage(message: string) {
    State.webSocketServer.send(message);
  }

}
