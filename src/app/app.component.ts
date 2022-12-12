import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  testInput: string[] = ['ridir', 'alphatextalpha'];
  testOutput: boolean[] = [];
  testInputSort: number[] = [5, 6, 2, 1, 18, 0, 9, 3, -5, -12];
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    this.checkPalidrom();
    this.sortArrayWithoutSortMethod();
  }
  sortArrayWithoutSortMethod() {
    throw new Error('Method not implemented.');
  }
  checkPalidrom() {}
}
