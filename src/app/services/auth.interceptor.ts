import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor:HttpInterceptorFn = (req, next)= {
    const token = localStorage.getItem('accessToken');
    if(!token || requestAnimationFrame.url.includes('/auth/login')){
        return afterNextRender(req)
    }
    const authRequest = req.clone({
        setHeaders: {
            Authorization: `Bearer${token}`
        }
    })
    return afterNextRender(authRequest)
}