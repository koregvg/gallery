# CSS

## Color

```less

// 主色

@main-color-primary: #6492e3; // 主导航, 按钮, 标题
@main-color-info: #bed8f9; // 进度条
@main-color-warning: #ff896b; // 提醒图标, 强提醒文案
@main-color-danger: #e65757; // 错误提示, 逾期提示

// 辅助色 (和规范对应关系从下到上)
@secondary-color-deep: #ccc; // 虚线, 分割线
@secondary-color-dark: #eee; // 边框描边, 输入框, 表单分割线
@secondary-color-light: #f5f5f5; // 背景色
@secondary-color-bright: #fff; // 白色

// 点缀色
@decoration-color-deep: #222; // 数字, 标题, 强提醒
@decoration-color-dark: #666; // 列表信息, 线框按钮描边
@decoration-color-light: #999; // 次要信息, 选择框引导文字, 文本框反显文字, 链接文字
@decoration-color-bright: #ccc; // 弱引导, 弱提示, 文本框引导文字, 线框按钮灰太文字, 线框按钮描边, 分割线  图标

// [特殊定义]
@black-color: #000;
@white-color: #fff;

// -------------------------------- //

// form & form like颜色定义

@form-color-primary: #ecf0f5; // 选择框/按钮按下状态
@form-color-info: #ced4de; // 按钮不可用状态
@form-color-warning: #e65757; // 逾期按钮按下状态
@form-color-danger: #ebc3c2; // 逾期按钮不可用状态

```

## Font-size

```less
@font-size-base: 14px;

@font-size-48: ceil((@font-size-base * 3.42)); // ~48px
@font-size-40: ceil((@font-size-base * 2.85)); // ~40px
@font-size-28: ceil((@font-size-base * 2.00)); // ~28px
@font-size-22: ceil((@font-size-base * 1.57)); // ~22px
@font-size-20: ceil((@font-size-base * 1.42)); // ~20px
@font-size-18: ceil((@font-size-base * 1.28)); // ~18px
@font-size-16: ceil((@font-size-base * 1.14)); // ~16px
@font-size-14: @font-size-base;
@font-size-12: ceil((@font-size-base * 0.85)); // ~12px

```


## Line-height

```less

@line-height-large: 100;
@line-height-small: 100;

```

## Spacing

```less

// [pixel]

@pixel-base: 1px;

// [距离]

@spacing-base: @pixel-base * 5;

@spacing-1x: @spacing-base * 1; // 5px
@spacing-2x: @spacing-base * 2; // 10px
@spacing-3x: @spacing-base * 3; // 15px
@spacing-4x: @spacing-base * 4; // 20px
@spacing-5x: @spacing-base * 5; // 25px
@spacing-6x: @spacing-base * 6; // 30px

```

## Z-index

```less

// 默认: 如mask等第一级
@z-index-default: 1000;

// 默认: 如dialog
@z-index-primary: 1002;

// 默认: 如需要在dialog之上显示的toast, loading
@z-index-important: 1004;

```


### Border-radius

```less

@border-radius-base: 4px;

@border-radius-default: @border-radius-base; // 4px
@border-radius-large: @border-radius-base * 1.5; // 6px
@border-radius-small: @border-radius-base / 2; // 2px

```

### Setting

```less

// [prefix]

@prefix: fin-;

// -------------------------------- //


// [黑白]
@black: @black-color;
@white: @white-color;

// body标签用
@background-color-black: @black-color;
@background-color-white: @white-color;
@background-color-gray: @secondary-color-light;

// 主色
@global-color-primary: @main-color-primary;

// -------------------------------- //


// [behavior相关]

// 点击高亮颜色
@tap-highlight-color: @main-color-warning;

// -------------------------------- //


// [字体相关]

// 重要字体颜色: 标题,高亮等
@text-color-primary: @global-color-primary;

// 默认字体颜色: 内容等
@text-color-default: @decoration-color-deep;

// 次要字体颜色: 灰度
@text-color-secondary: @decoration-color-bright;

// -------------------------------- //


// [border相关]

// 高亮边框颜色
@border-color-primary: @secondary-color-dark;

// 默认边框颜色
@border-color-default: @decoration-color-bright;

// 次要边框颜色
@border-color-secondary: @decoration-color-bright;

// -------------------------------- //


// [disabled]

// 禁用
@disabled-color: @decoration-color-bright;

// -------------------------------- //


// [readonly]

// 只读颜色
@readonly-color: @decoration-color-bright;

// -------------------------------- //


// [link]

// 链接颜色
@link-color: @decoration-color-light;

// -------------------------------- //


// [不透明度]

@opacity: 0.7;

```

