import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Pusher from 'pusher-js';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  username = 'username';
  message = '';
  messages = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('a9e574b74778e2fc5956', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat-app');
    channel.bind('message', data => {
      this.messages.push(data);
    });
  }

  submit(): void {
    this.http.post('http://localhost:8000/api/messages', {
      username: this.username,
      message: this.message
    }).subscribe(() => this.message = '');
  }

}
