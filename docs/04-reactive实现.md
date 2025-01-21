# reactive 实现
1、创建 proxy
2、收集 effect 依赖 track - get 监听中收集依赖
3、触发收集的依赖 trigger - set 监听中触发依赖







## 依赖收集 track

get 方法中调用 track 方法
```javascript
export function track(target: object, type: TrackOpTypes, key: unknown) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()))
    }
    let dep = depsMap.get(key)
    if (!dep) {
      depsMap.set(key, (dep = createDep()))
    }

    const eventInfo = __DEV__
      ? { effect: activeEffect, target, type, key }
      : undefined

    trackEffects(dep, eventInfo)
  }
}
```
建立对应属性与依赖之间的对应关系

【有道云笔记】vue3-targetMap.excalidraw
https://note.youdao.com/s/b43fAK9Y

## 依赖触发 trigger triggerEffects


## effect 做的事情
