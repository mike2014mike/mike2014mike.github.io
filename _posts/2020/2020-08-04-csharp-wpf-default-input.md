---
layout:     post
title:      C# WPF TextBox 設定預設輸入法
date:       2020-08-04 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - C-Sharp
 - WPF
---


## 說明
* 工作上遇到登入視窗中帳號的 TextBox 預設輸入法是注音輸入法，但一般帳號是字母和數字的組合，希望可以預設改為英文輸入法。
* 以前 WinForm 是透過 `KeyPress 事件`去判定 char 是否為字母或數字 `Char.IsLettrOrDigit(e.KeyChar)`，如果不是就用 `e.Handled = true;` 讓它無作用。
* 但在 WPF 中沒有 `KeyPress 事件`，也無 `e.KeyChar` 可用，雖然有找到 `Char.IsLetterOrDigit((char)KeyInterop.VirtualKeyFromKey(e.Key))` 這樣的用法，但效果還是不好，預設仍然是注音輸入法。
* 下面方法是更改控制項初始輸入法，雖然還是可以手動切換成注音輸入法，但效果好多了。(應該沒人用中文當帳號的吧！？)

## XAML 寫法

```xml
<TextBox Name="txtName" Width="300" Height="23">
    <!--預設使用英文輸入-->
    <TextBox.InputScope>
        <InputScope>
            <InputScope.Names>
                <InputScopeName NameValue="AlphanumericHalfWidth"/>
            </InputScope.Names>
        </InputScope>
    </TextBox.InputScope>
</TextBox>
```

## C# 寫法

```csharp
InputScope scope = new InputScope();
InputScopeName name = new InputScopeName();
name.NameValue = InputScopeNameValue.AlphanumericHalfWidth;
scope.Names.Add(name);
txtName.InputScope = scope;
```


## WPF 限制字母或數字

```csharp
private void txtName_KeyDown(object sender, KeyEventArgs e)
{
    if (!Char.IsLetterOrDigit((char)KeyInterop.VirtualKeyFromKey(e.Key)))
    {
        e.Handled = true;
    }
}
```

## WinForm 限制字母或數字

```csharp
private void txtName_KeyPress(object sender, KeyPressEventArgs e)
{
    if (!Char.IsLetterOrDigit(e.KeyChar))
    {
        e.Handled = true;
    }
}
```