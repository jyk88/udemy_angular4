import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if (!value) {
      return null;
    }

    const words = value.split(' ');

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.isPreposition(word)) {
        word = word.toLowerCase();
      } else {
        word = this.toTitleCase(word);
      }
    }

    return words.join(' ');

  }

  private toTitleCase(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  private isPreposition(word: string): boolean {
    const prepositions = ['of', 'the', 'and'];

    return prepositions.includes(word);
  }
}
