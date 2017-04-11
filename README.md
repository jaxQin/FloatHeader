# FloatHeader使用说明
------
在线预览：[demo][1]
------

**把以下css代码复制到使用页面**

------

>  .fixed-nav {
        position: fixed;
        width: 100%;
        top: -100px;
        -webkit-transition: top .5s;
        -moz-transition: top .5s;
        -o-transition: top .5s;
        transition: top .5s;
        -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
        -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
        box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
    }

 >   .fixed-nav-appear {
        top: 0;
    }
**注意：top:-100px改成你对应导航的高度**

js调用：$("#nav").FloatHeader()
----------------------------

***`Created By jaxQin`***





  [1]: https://jaxqin.github.io/FloatHeader/