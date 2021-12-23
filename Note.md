#

### CSS 动画
```css
/* 声明一个叫 spin 的旋转动画*/
@keyframes spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.loading {
  animation: spin 1s infinite linear;
  /*
  infinite : 无限循环
  linear: 线性变化
  */
}
```
