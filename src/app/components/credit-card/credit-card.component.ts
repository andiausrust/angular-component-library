import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

    @Input() creditCardNumber = '';
    readonly = false;

    get isReadOnly(): boolean {
        return this.readonly;
    }

    @Input() set isReadOnly(value: boolean) {
        this.creditCardNumber = value ? this.formatReadonlyCCNum(this.creditCardNumber) : this.creditCardNumber;
        this.readonly = value;
    }

    private formatReadonlyCCNum(ccNum: string): string {
        const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
        const onlyLast4Shown = parts.map((part, index) => {
            if (index === parts.length - 1) {
                return part;
            }

            return 'xxxx';
        });

        return onlyLast4Shown.join('-');
    }

  constructor() { }

  ngOnInit(): void {
  }

}
