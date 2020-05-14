# 说明
- 记录angular自带的一些可观察对象，以及是否需要取消订阅；
- DEMO:https://wjx774326739.github.io/ngx-observable/

## http请求
- http每次请求成功或者失败之后，会自动取消订阅，不会有潜在的内存泄漏风险；

## form表单
- form表单中的可观察对象（valueChanges,statusChanges等），订阅后不会自动取消订阅，需要手动取消。

## router路由
- router路由中的可观察对象，订阅后不会自动取消订阅，需要手动取消。

## @ViewChildren
- 订阅@ViewChildren()的属性中的changes观察者对象后，在组件被销毁时，将自动被取消订阅，不需要手动取消

## @ContentChildren
- 通过测试可知，订阅changes观察者对象后，在组件被销毁时，将自动被取消订阅，不需要手动取消。
