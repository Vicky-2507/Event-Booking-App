import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('accessToken');

    if (!token || req.url.includes('/auth/login')) {
        return next(req);
    }

    const authRequest = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });

    return next(authRequest);
};
