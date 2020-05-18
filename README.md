# 说明
- 记录angular自带的一些可观察对象，以及是否需要取消订阅；
- DEMO:https://wjx774326739.github.io/ngx-observable/

## http请求
- http每次请求成功或者失败之后，会自动取消订阅，不会有潜在的内存泄漏风险；

## form表单
- form表单中的可观察对象（valueChanges,statusChanges等），订阅后不会自动取消订阅，需要手动取消。

## router路由
- router路由中的可观察对象，订阅后不会自动取消订阅，需要手动取消。
- 官方教程里面说会在不需要的时候自动取消activatedRouter的观察者对象的订阅。但是组件销毁后并没有自动取消。不知道这所谓的不需要的时候是什么时候.链接:https://angular.cn/guide/router#observable-parammap-and-component-reuse

## @ViewChildren
- 在开发模式（jit）下，可以观测到changes在组件被销毁后有被取消订阅。但是在生产环境(aot模式下)却发现没有被订阅

## @ContentChildren
- 在开发模式（jit）下，可以观测到changes在组件被销毁后有被取消订阅。但是在生产环境(aot模式下)却发现没有被订阅

