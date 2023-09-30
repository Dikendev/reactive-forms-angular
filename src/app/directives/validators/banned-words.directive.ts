import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appBannedWords]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: BannedWordsDirective, multi: true },
  ],
})
export class BannedWordsDirective implements Validator {
  private bannedWords: string[] = [];
  private onChange: () => void = () => {};
  constructor() {}

  validate(control: AbstractControl<string>): ValidationErrors | null {
    const foundBannedWord = this.bannedWords.find(
      (word) => word.toLowerCase() === control.value?.toLowerCase()
    );
    console.log('foundBannedWord', foundBannedWord);
    return !foundBannedWord
      ? null
      : { appBannedWords: { bannedWords: foundBannedWord } };
  }

  @Input()
  set appBannedWords(value: string | string[]) {
    this.bannedWords = Array.isArray(value) ? value : [value];
    this.onChange();
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onChange = fn;
  }
}
