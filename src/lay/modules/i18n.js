layui.define(function (exports) {
    "use strict";

    //字符常量
    var MOD_NAME = 'i18n',
        DEFAULT_LANG = {
            'table.FilterColumn': '筛选列',
            'table.Export': '导出',
            'table.Print': '打印',
            'table.InterfacteRequestDataFormatError': '返回的数据不符合规范，正确的成功状态码应为：',
            'table.InterfacteRequestError': '数据接口请求异常：',
            'table.ExportFeatureWarn': '导出功能不支持 IE，请用 Chrome 等高级浏览器导出',
            'table.ExportToCsv': '导出到 Csv 文件',
            'table.ExportToExcel': '导出到 Excel 文件',
            'table.PrintWindow': '打印窗口',
            'laypage.Limit': '{0} 条/页',
            'laypage.Count': '共 {0} 条',
            'util.DaysAgo': '天前',
            'util.HoursAgo': '小时前',
            'util.MinutesAgo': '分钟前',
            'util.Future': '未来',
            'util.JustNow': '刚刚',
            'tree.DeleteNodeWarning': '确认删除该节点{0}吗？',
            'tree.DefaultNodeName': '未命名',
            'tree.None': '无数据',
            'transfer.KeywordSearch': '关键词搜索',
            'transfer.Title1': '列表一',
            'transfer.Title2': '列表二',
            'transfer.None': '无数据',
            'transfer.SearchNone': '无匹配数据',
            'layedit.ShiftKey': '请暂时用shift+enter',
            'layedit.UploadFailed': '上传失败',
            'layedit.Help': '帮助',
            'layedit.HyperLink': '超链接',
            'layedit.OpenWith': '打开方式',
            'layedit.CurrentWindow': '当前窗口',
            'layedit.NewWindow': '新窗口',
            'layedit.Confirm': '确定',
            'layedit.Cancel': '取消',
            'layedit.InsertCode': '插入代码',
            'layedit.PleaseSelectLanguage': '请选择语言',
            'layedit.Code': '代码',
            'layedit.Tool.HtmlSourceCode': 'HTML源代码',
            'layedit.Tool.Bold': '加粗',
            'layedit.Tool.Italic': '斜体',
            'layedit.Tool.UnderLine': '下划线',
            'layedit.Tool.StrikeThrough': '删除线',
            'layedit.Tool.AlignLeft': '左对齐',
            'layedit.Tool.AlignCenter': '居中对齐',
            'layedit.Tool.AlignRight': '右对齐',
            'layedit.Tool.InertHyperLink': '插入链接',
            'layedit.Tool.ClearHyperLink': '清除链接',
            'layedit.Tool.Emoj': '表情',
            'layedit.Tool.Picture': '图片',
            'layedit.Tool.InsertCode': '插入代码',
            'layedit.Tool.Help': '帮助',
            'form.Tip': '提示',
            'form.Required': '必填项不能为空',
            'form.Phone': '请输入正确的手机号',
            'form.Email': '邮箱格式不正确',
            'form.Url': '链接格式不正确',
            'form.Number': '只能填写数字',
            'form.Date': '日期格式不正确',
            'form.Identity': '请输入正确的身份证号',
            'form.PleaseSelect': '请选择',
            'form.NotOption': '无匹配项',
            'form.NotHaveOption': '没有选项',
            'form.NotSupportFormRender':'不支持的{0}表单渲染',
            'flow.LoadMore': '加载更多',
            'flow.End': '没有更多了',
            'element.Shrink': '收缩'

        }, DEFINE_LANG = {

        };

    var i18n = function () {
        this.v = '0.1.0';
    };

    i18n.prototype.SetDefineLang = function (defineLang) {
        DEFINE_LANG = defineLang || {};
    }

    /**
     * 获取显示名称
     * @param {string} key 语言key
     */
    i18n.prototype.L = function (key) {
        var value = DEFINE_LANG[key];
        if (value) {
            return value;
        }
        value = DEFAULT_LANG[key];
        if (value == undefined) {
            return key;
        }

        var copiedArguments = Array.prototype.slice.call(arguments, 0);
        copiedArguments[0] = value;

        return formatString.apply(this, copiedArguments);
    }

    function replaceAll(str, search, replacement) {
        var fix = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return str.replace(new RegExp(fix, 'g'), replacement);
    };

    function formatString() {
        if (arguments.length < 1) {
            return null;
        }

        var str = arguments[0];

        for (var i = 1; i < arguments.length; i++) {
            var placeHolder = '{' + (i - 1) + '}';
            str = replaceAll(str, placeHolder, arguments[i]);
        }

        return str;
    };

    
    //输出接口
    exports(MOD_NAME, new i18n());
})