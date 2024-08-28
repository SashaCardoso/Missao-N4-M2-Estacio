import { Injectable } from '@angular/core';
import Publisher from "../types/publisher";

@Injectable({
  providedIn: 'root'
})
  
export class PublisherControllerService {

  constructor() { }

  publishers: Publisher[] = [
    { publisherId: 1, name: "Publisher One" },
    { publisherId: 2, name: "Publisher Two" },
    { publisherId: 3, name: "Publisher Three" },
  ]
  getPublishers = () => {
    return this.publishers;
  }
  getPublisherById = (id: number): Publisher => {
    return this.publishers.find((pub) => pub.publisherId === id) as Publisher;
  }
}
