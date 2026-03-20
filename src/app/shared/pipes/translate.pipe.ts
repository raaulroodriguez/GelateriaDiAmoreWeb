import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Pipe({ name: 'translate', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  private langService = inject(LanguageService);

  transform(key: string): string {
    // Accessing .translations() registers this pipe as a Signal consumer,
    // so Angular re-evaluates it whenever the language changes.
    this.langService.translations();
    return this.langService.t(key);
  }
}
