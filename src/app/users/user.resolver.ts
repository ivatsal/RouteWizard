import { ResolveFn } from '@angular/router';

export const UserResolver: ResolveFn<any> = (route, state) => {
  setTimeout(() => {
    return true;
  }, 3000);
  return true;
};
