import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../shared/storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  ngOnInit() {
  }

  onSave() {
    this.storageService.storeRecipes()
      .subscribe(
        (response: Response) => { console.log(response); },
        (error) => { console.log(error); }
      );
  }

  onFetch() {
    this.storageService.getRecipes();
  }
}
