import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';

export const UserResolver: ResolveFn<any> = (route, state) => {
  setTimeout(() => {
    return true;
  }, 3000);
  return true;
};
