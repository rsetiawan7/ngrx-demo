import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.endsWith('/auth/login') && req.method === 'POST') {
            const token = btoa(`${req.body.username}:${req.body.password}`);

            if (token) {
                req = req.clone({
                    headers: req.headers.set('Authorization', `Basic ${token}`),
                    body: null,
                });
                req = req.clone({
                  headers: req.headers.set('X-Platform', 'SC')
              });
            }

            return next.handle(req);
        }

        return next.handle(req);
    }
}
