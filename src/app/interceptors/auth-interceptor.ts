import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const modifiedRequest = req.clone({
    setHeaders: {
      Authorization: 'Bearer dummy-token'
    }
  });

  return next(modifiedRequest);
};